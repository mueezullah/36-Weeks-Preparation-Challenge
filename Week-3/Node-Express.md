# 🌐 Node.js & Express.js

## 📦 What is Node.js?

**Node.js** is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript **outside the browser**—usually on the server.

```js
// A simple Node.js server
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

### 🔍 Key Features of Node.js:

- **JavaScript on the Server** – Write backend logic in JavaScript.
- **Non-blocking I/O** – Efficiently handles many requests at once.
- **Event-driven Architecture** – Ideal for real-time applications.
- **Fast Execution** – Powered by Chrome's V8 engine.
- **Huge Package Ecosystem** – Access thousands of libraries via `npm`.

> 💡 Use Case Example: Build REST APIs, chat apps, file upload systems, or any scalable backend service.

---

## ⚙️ What is Express.js?

**Express.js** is a lightweight and flexible **web application framework** built on top of Node.js. It simplifies the process of building web servers and APIs.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
```

### 🔍 Key Features of Express.js:

- **Simplified Routing** – Cleanly define routes using `app.get()`, `app.post()`, etc.
- **Middleware Support** – Easily add features like logging, authentication, error handling, etc.
- **Built for APIs** – Designed to build robust RESTful APIs.
- **Minimal and Modular** – Add only what you need; highly customizable.

> 💡 Use Case Example: Create server routes for your website or mobile app backend.

---

## 🤝 Why Use Node.js + Express.js Together?

| Node.js                       | Express.js                          |
| ----------------------------- | ----------------------------------- |
| Runs JavaScript on the server | Simplifies server and routing logic |
| Fast and event-driven         | Adds structure and convenience      |
| Base engine                   | Framework on top of Node.js         |

**Together**, they let you:

- Build web applications and APIs quickly
- Handle HTTP requests easily
- Structure your code more cleanly
- Create scalable and maintainable server-side apps

---
