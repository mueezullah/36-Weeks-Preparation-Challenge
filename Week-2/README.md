# 📘 Web Backend Basics – For Beginners & Interview Prep

This repository covers essential **backend web development concepts** with practical examples, analogies, and interview questions. Perfect for beginners and students preparing for interviews!

---

## 📚 Topics Covered

- HTTP Methods
- HTTP Server
- Routing in Express
- Query Parameters
- Request & Response
- Status Codes
- Postman
- Express.js
- Git & GitHub
- Interview Questions

---

## 🧩 HTTP Methods

### 📖 What are HTTP Methods?

HTTP methods are **ways clients (like browsers or Postman) ask the server to perform actions**.

Think of a **restaurant**:

- You say, "I want a menu" → `GET`
- You say, "I want to place an order" → `POST`
- You say, "Change my order" → `PUT` or `PATCH`
- You say, "Cancel my order" → `DELETE`

### ✅ Common Methods

| Method | Use                   |
| ------ | --------------------- |
| GET    | Fetch data            |
| POST   | Submit data           |
| PUT    | Update existing data  |
| PATCH  | Partially update data |
| DELETE | Remove data           |

---

## 🖥️ HTTP Server

### 📖 What is an HTTP Server?

An HTTP server **listens for incoming HTTP requests** and returns responses. It's like a **waiter** who listens to your order and brings food from the kitchen.

### ✅ Node.js Server Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from HTTP Server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 🌐 Routing in Express

### 📖 What is Routing?

Routing defines how **URLs map to server logic**.

Think of it like a **hotel front desk**:

- `/home` → Show homepage
- `/about` → Show about info
- `/contact` → Handle contact form

### ✅ Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Home Page"));
app.get("/about", (req, res) => res.send("About Page"));

app.listen(3000);
```

### 🗺️ Diagram

```
Client Browser
     ↓
  /about  ------------→ Server
                        ↳ Sends: "About Page"
```

---

## 🔎 Query Parameters

### 📖 What are Query Parameters?

Query parameters are **key-value pairs in the URL** after a `?`, used for filtering or searching.

Example:

```
/students?course=math&limit=2
```

It’s like telling the server: "Give me students in the math course, only 2 of them."

### ✅ Express Example

```js
app.get("/students", (req, res) => {
  const { course, limit } = req.query;
  res.send(`Course: ${course}, Limit: ${limit}`);
});
```

---

## 📨 Request & Response

### 📖 Analogy

- **Request**: You ordering food at a restaurant.
- **Response**: The restaurant serving your food.

### ✅ Express Example

```js
app.get("/welcome", (req, res) => {
  res.send("Welcome to Backend!");
});
```

### 🖼️ Diagram

```
Browser (Client)
     ↓  Request
  [ Server (Express) ]
     ↑  Response
```

---

## 📾 Status Codes

### 📖 What are Status Codes?

Status codes are **three-digit numbers** sent by the server to indicate the result of a request.

### ✅ Common Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 400  | Bad Request  |
| 404  | Not Found    |
| 500  | Server Error |

### ✅ Example

```js
app.get("/ok", (req, res) => {
  res.status(200).send("All good!");
});
```

### 🧭 Diagram

```
You → [ GET /ok ] → Server
        ← 200 OK ←
```

---

## 🛠️ Postman

### 📖 What is Postman?

Postman is like a **remote control** to test API endpoints without using a browser.

You can:

- Test all HTTP methods
- Send data (Body, Params)
- View server responses

It's widely used to test backend APIs before integrating with the frontend.

---

## ⚙️ Express.js

### 📖 What is Express?

Express is a **Node.js web framework** that simplifies building servers.

✅ Features:

- Routing
- Middleware
- Error handling
- API development

### ✅ Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Express!"));

app.listen(3000);
```

---

## 🔧 Git & GitHub

### 📖 Git

Git is a **version control system**.

- Think of it like **saving checkpoints** in a game.
- You can go back and recover code versions.

### 📖 GitHub

GitHub is like a **cloud for your Git repositories**.

- Store and back up code
- Collaborate with others
- Showcase your projects

### ✅ Common Git Commands

```bash
git init             # Start a new repo
git status           # Check current changes
git add .            # Stage all files
git commit -m "msg"  # Save changes
git push origin main # Upload to GitHub
```

---

## 🎯 Interview Questions

### 🔹 1. What is the difference between PUT and PATCH?

**Answer**:

- `PUT` replaces the entire resource.
- `PATCH` updates only the specified fields.

---

### 🔹 2. What does `req.query` do in Express?

**Answer**: It gives access to **query parameters** in the URL.

---

### 🔹 3. What is the role of Status Codes?

**Answer**: Status codes indicate the **result of an HTTP request** (e.g., 200 for success, 404 for not found).

---

### 🔹 4. What is the difference between `GET` and `POST`?

**Answer**:

- `GET` fetches data from the server.
- `POST` sends data to the server.

---

### 🔹 5. How do you test APIs?

**Answer**: Use **Postman** to send HTTP requests and check server responses.

---

### 🔹 6. How does routing work in Express?

**Answer**: Routing maps **URL paths to handler functions** that process the request and send a response.

---
