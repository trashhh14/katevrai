import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

type RequestBody = {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendTelegramWithPowerShell(
  token: string,
  chatId: string,
  text: string,
) {
  const script = `
$ErrorActionPreference = "Stop"
$body = @{
  chat_id = $env:TG_CHAT_ID
  text = $env:TG_TEXT
  disable_web_page_preview = $true
} | ConvertTo-Json -Compress
$response = Invoke-RestMethod -Uri "https://api.telegram.org/bot$env:TG_TOKEN/sendMessage" -Method Post -ContentType "application/json; charset=utf-8" -Body $body
if (-not $response.ok) { throw "Telegram returned ok=false" }
`;

  const encodedCommand = Buffer.from(script, "utf16le").toString("base64");

  await execFileAsync(
    "powershell.exe",
    ["-NoProfile", "-NonInteractive", "-EncodedCommand", encodedCommand],
    {
      env: {
        ...process.env,
        TG_TOKEN: token,
        TG_CHAT_ID: chatId,
        TG_TEXT: text,
      },
      timeout: 30000,
    },
  );
}

export async function POST(request: Request) {
  let body: RequestBody;

  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json(
      { error: "Некорректные данные формы." },
      { status: 400 },
    );
  }

  const name = clean(body.name);
  const contact = clean(body.contact);
  const message = clean(body.message);

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Укажите имя и способ связи." },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram не настроен на сервере." },
      { status: 500 },
    );
  }

  const text = [
    "Новая заявка с сайта Kate Vrai",
    "",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    `Сообщение: ${message || "не указано"}`,
  ].join("\n");

  let telegramResponse: Response;

  try {
    telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      },
    );
  } catch {
    if (process.platform === "win32") {
      try {
        await sendTelegramWithPowerShell(token, chatId, text);
        return NextResponse.json({ ok: true });
      } catch {
      }
    }

    return NextResponse.json(
      { error: "Не удалось подключиться к Telegram API." },
      { status: 502 },
    );
  }

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text();

    return NextResponse.json(
      { error: "Telegram не принял сообщение.", details },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
