# Kate Vrai landing

Одностраничный лендинг тренера по растяжке, балету и пилатесу.

## Запуск

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://localhost:3000`.

## Telegram-заявки

Для отправки заявок из формы добавьте переменные окружения:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

Без этих переменных API `/api/request` вернет ошибку конфигурации, чтобы заявка не терялась незаметно.

## Проверка

```bash
npm run lint
npm run build
```
