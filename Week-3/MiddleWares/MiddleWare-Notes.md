# Express.js Middleware

## 🧩 What is Middleware?

Middleware in Express.js is a function that runs between when a request is received and when the response is sent. It can:

- Run code
- Modify req and res objects
- End the request-response cycle
- Call the next middleware using `next()`.

## 🔧 Syntax

```js
function middlewareName(req, res, next) {
  // Do something with req or res
  next(); // Call the next middleware in line
}
```

## 🚀 Example: Logger Middleware

```js
const express = require("express");
const app = express();

function loggerMiddleware(req, res, next) {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

## 🧱 Types of Middleware

| Type              | Description                                      | Example                         |
| ----------------- | ------------------------------------------------ | ------------------------------- |
| Application-level | Applies to the entire app using `app.use()`      | Logging, Authentication         |
| Router-level      | Applies to specific routes or routers            | Modular logic                   |
| Built-in          | Comes with Express (like `express.static`)       | Serving static files            |
| Third-party       | Installed via NPM (like `morgan`, `body-parser`) | Body parsing, logging, security |
| Error-handling    | Catches and processes errors                     | `(err, req, res, next)`         |

## 💡 Example: Multiple Middleware Functions

```js
function authenticate(req, res, next) {
  console.log("Authenticating...");
  next();
}

function authorize(req, res, next) {
  console.log("Authorizing...");
  next();
}

app.use(authenticate);
app.use(authorize);

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Accessed");
});
```

## ⚠️ Error-handling Middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

## 📘 Interview Questions and Code Examples

### ❓ Q1: What is middleware in Express.js?

**Answer:** Middleware is a function that has access to the request and response objects. It can process the request and pass it to the next handler using next().

```js
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
```

### ❓ Q2: How does middleware work in Express?

**Answer:** Middleware processes the request before the route handler. It can call `next()` to move forward.

```js
app.use((req, res, next) => {
  req.user = "admin";
  next();
});

app.get("/", (req, res) => {
  res.send(`Hello ${req.user}`);
});
```

### ❓ Q3: What happens if `next()` is not called?

**Answer:** If `next()` is not called, the request will hang and no response will be sent to the client.

```js
app.use((req, res, next) => {
  // Missing next() or res.send ends the chain prematurely
});
```

### ❓ Q4: How to handle errors with middleware?

**Answer:** Use an error-handling middleware with four parameters: `(err, req, res, next)`.

```js
app.use((err, req, res, next) => {
  res.status(500).send("Error occurred");
});
```

### ❓ Q5: Can middleware be used for specific routes?

**Answer:** Yes, you can attach middleware directly to a route.

```js
function check(req, res, next) {
  console.log("Checking route");
  next();
}

app.get("/profile", check, (req, res) => {
  res.send("Profile Page");
});
```

## 📊 Diagram: Middleware Flow in Express

```text
         ┌────────────┐
         │  Request   │
         └────┬───────┘
              ↓
     ┌────────────────────┐
     │ Middleware 1       │
     └────────┬───────────┘
              ↓
     ┌────────────────────┐
     │ Middleware 2       │
     └────────┬───────────┘
              ↓
     ┌────────────────────┐
     │ Route Handler      │
     └────────┬───────────┘
              ↓
         ┌────────────┐
         │  Response  │
         └────────────┘
```

---
