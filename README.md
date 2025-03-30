# Portfolio App

Простое веб-приложение, демонстрирующее базовые навыки работы с Node.js, React, Docker и деплоем на удалённый сервер. Бэкенд предоставляет API с информацией о разработчике (имя, описание, навыки), а фронтенд отображает эти данные с использованием Material UI.

## Технологии

- **Backend**: Node.js, Express
- **Frontend**: React, Material UI
- **Контейнеризация**: Docker, Docker Compose
- **Хостинг**: Timeweb Cloud (облачный сервер)

### Требования

- Node.js (v18 или выше)
- Docker и Docker Compose
- npm

## 🚀 Установка и запуск

1. Склонируйте репозиторий:

   ```bash
   git clone git@github.com:AnastasiyaGuryanova/time-server-app.git

   ```

2. Перейдите в папку проекта:

   ```bash
   cd time-server-app
   ```

3. Запустите с помощью Docker Compose:

   ```bash
   docker-compose up --build
   ```

   - Бэкенд будет доступен по адресу: http://localhost:3000
   - Фронтенд будет доступен по адресу: http://localhost

4. Остановите приложение:

   ```bash
   docker-compose down
   ```
