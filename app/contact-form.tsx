"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          contact: formData.get("contact"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setState("success");
        form.reset();
        return;
      }
    } catch {
    }

    setState("error");
  }

  if (state === "success") {
    return (
      <div className="contact-form contact-success" aria-live="polite">
        <div className="success-orbit" aria-hidden="true">
          <span />
        </div>
        <p className="success-kicker">Заявка отправлена</p>
        <h3>Спасибо, скоро свяжемся</h3>
        <p>
          Я получила ваше сообщение и отвечу в ближайшее время в указанном
          способе связи.
        </p>
        <button type="button" onClick={() => setState("idle")}>
          Отправить еще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Имя</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Telegram / почта / телефон</span>
        <input name="contact" type="text" autoComplete="email tel" required />
      </label>
      <label>
        <span>Сообщение</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Например: хочу улучшить растяжку и осанку"
        />
      </label>
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Отправляю..." : "Отправить заявку"}
      </button>
      <p className="form-status" aria-live="polite">
        {state === "error" &&
          "Не получилось отправить заявку. Попробуйте еще раз или напишите в Telegram."}
      </p>
    </form>
  );
}
