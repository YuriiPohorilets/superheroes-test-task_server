**Read in another language: [Українська](README.md), [English](README.en.md).**

# Superheroes | Backend

This is the server part of the **Superheroes** project. This server provides an
`API` for obtaining and saving information about superheroes.

---

## Project overview

This project includes server and client parts. The server part is written with
using `Node.js` and `Express.js`, as well as the `MongoDB` database.

## Реалізація проекту

- The project was created with the help of
  [Node.js v18.16.0 LTS](https://nodejs.org/en).
- The database is implemented using [MongoDB](https://www.mongodb.com/).
- Validation of schemes using the library [Joi](https://joi.dev/).
- Image processing and storage using libraries
  [Multer](https://github.com/expressjs/multer) and cloud service
  [Cloudinary](https://cloudinary.com/).

---

## Installation

1. Clone the repository using the command:

```
git clone https://github.com/YuriiPohorilets/superheroes-test-task_server.git
```

2. Install the dependencies by running the command:

```
npm install
```

### Settings

1. Create an `.env` file in the root of the project based on the file
   `.env.example`.
2. Fill the values of the environment variables in the `.env` file according to
   your environment.

### Starting the server

Start the server by running the command:

```
npm start
```

The server will be started on the port specified in the `.env` file.

---

## API

The server provides the following API routes:

- `GET /api/superheroes` - Get a list of all superheroes.
- `GET /api/superheroes/:id` - Get a specific superhero for his ID.
- `POST /api/superheroes` - Create a new superhero.
- `PUT /api/superheroes/:id` - Update superhero information.
- `DELETE /api/superheroes/:id` - Delete a superhero by his ID.

Additional information on the use of these routes can be found at source code of
the project.

## Model `Hero`

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

## Tech stack

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](#)

---

# [Frontend repository](https://github.com/YuriiPohorilets/superheroes-test-task_server)

# [View a demo](https://yuriipohorilets.github.io/superheroes-test-task_client/)
