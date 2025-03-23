## reactSeminarServerRendering

### Как запустить:

1) С помощью docker:

    ```
    docker-compose up -d
    ```

2) Локально

    Устанавливаем зависимости:

    ```
    npm install
    ```

    Запускаем бэкенд сервер вместе с переменными окружения:

    ```
    PORT=1883 npm run start
    ```

### API

1) Получение всех постов
    ```
    http://localhost:1883/posts/
    ```

2) Получение поста по id

    ```
    http://localhost:1883/posts/{id}
    ```