**Читати іншою мовою: [Українська](README.md), [English](README.en.md).**

# Superheroes | Backend

Це серверна частина проекту **Superheroes**. Цей сервер надає `API` для
отримання та збереження інформації про супергероїв.

---

## Огляд проекту

Цей проект включає серверну та клієнтську частини. Серверна частина написана з
використанням `Node.js` та `Express.js`, а також бази даних `MongoDB`.

## Реалізація проекту

- Проект створено за допомогою [Node.js v18.16.0 LTS](https://nodejs.org/en).
- Базу даних реалізовано з використанням [MongoDB](https://www.mongodb.com/).
- Валідація схем з використанням бібліотеки [Joi](https://joi.dev/).
- Обробка та зберігання зображень з використанням бібліотек
  [Multer](https://github.com/expressjs/multer) та хмарного сервісу
  [Cloudinary](https://cloudinary.com/).

---

## Встановлення

1. Склонуйте репозиторій за допомогою команди:

```
git clone https://github.com/YuriiPohorilets/superheroes-test-task_server.git
```

2. Встановіть залежності, виконавши команду:

```
npm install
```

### Налаштування

1. Створіть файл `.env` у кореневій папці проекту на основі файлу
   `.env.example`.
2. Заповніть значення змінних оточення у файлі `.env` згідно вашого оточення.

### Запуск сервера

Запустіть сервер, виконавши команду:

```
npm start
```

Сервер буде запущений на порту, вказаному у файлі `.env`.

---

## API

Сервер надає наступні маршрути `API`:

- `GET /api/superheroes` - Отримати список всіх супергероїв.
- `GET /api/superheroes/:id` - Отримати конкретного супергероя за його
  ідентифікатором.
- `POST /api/superheroes` - Створити нового супергероя.
- `PUT /api/superheroes/:id` - Оновити інформацію про супергероя.
- `DELETE /api/superheroes/:id` - Видалити супергероя за його ідентифікатором.

Додаткова інформація про використання цих маршрутів може бути знайдена у
вихідному коді проекту.

## Модель `Hero`

```javascript
{
  nickname: String,
  realName: String,
  originDescription: String,
  superpowers: String,
  catchPhrase: String,
  images: [String]
}
```

---

## Стек технологій

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](#)

---

# [Frontend repository](https://github.com/YuriiPohorilets/superheroes-test-task_client)

# [Жива сторінка](https://yuriipohorilets.github.io/superheroes-test-task_client/)
