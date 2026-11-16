# PongOS Hub

Публичный каталог портов HyperOS 3 для Nothing Phone (2), кодовое имя Pong.

## Запуск локально
1. `npm install`
2. Создай проект Supabase.
3. Выполни `supabase/schema.sql` в SQL Editor.
4. Добавь переменные окружения `NEXT_PUBLIC_SUPABASE_URL` и `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Создай администратора в Supabase → Authentication → Users.
6. `npm run dev`

## Публикация
Импортируй репозиторий в Vercel и добавь те же переменные окружения. Админ-панель находится по адресу `/admin`.

ZIP-файлы хранятся в Supabase Storage (bucket `roms`), а не в GitHub. Настройка bucket и политик находится в `supabase/schema.sql`.
