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

# 🔐 Authentication & Authorization

---

## 🔐 What is Authentication?

**Authentication** is the process of verifying the identity of a user or system. It ensures that the person or entity accessing the system is who they claim to be.

### How Authentication Works:

1. User submits their credentials (like a **username** and **password**).
2. The server checks these credentials against a stored record (usually in a database).
3. If the credentials match, the user is authenticated and granted access.

> Example: Logging in to a website by entering a username and password.

---

## ✅ What is Authorization?

**Authorization** is the process of determining what a **verified (authenticated)** user can and cannot do within a system. It answers the question, "What are you allowed to do?"

### How Authorization Works:

1. Once the user is authenticated, the system checks their permissions or roles.
2. Based on their role or permissions, the system grants or restricts access to specific resources.

> Example: An admin user can access the user management panel, but a regular user cannot.

---

## ⚖️ Difference Between Authentication and Authorization

| **Aspect**         | **Authentication**                     | **Authorization**                                        |
| ------------------ | -------------------------------------- | -------------------------------------------------------- |
| **Definition**     | Verifying the identity of a user.      | Determining the permissions or access level of the user. |
| **What it checks** | "Who are you?" (Identity)              | "What are you allowed to do?" (Permissions)              |
| **Example**        | Logging in with username and password. | Accessing different pages based on user roles.           |
| **Process**        | Happens first, before authorization.   | Happens after successful authentication.                 |
| **Goal**           | Confirm the user's identity.           | Control access to resources or actions.                  |

---

# 📚 SQL vs NoSQL

---

## 🔑 What is a Database?

A **database** is an organized collection of data, usually stored and accessed electronically. Databases are used by applications to store information like user details, products, transactions, and more. There are two main types of databases:

- **Relational Databases (SQL)**
- **Non-relational Databases (NoSQL)**

---

## ⚖️ SQL vs NoSQL Databases

### **SQL Databases**

SQL (Structured Query Language) databases are relational databases that use structured data and support SQL queries for managing and manipulating data. They follow a **table-based** structure and enforce relationships between data.

#### **Key Features of SQL Databases:**

1. **Schema-Based**: Data is organized into tables with predefined schemas (columns and data types).
2. **ACID Compliance**: SQL databases ensure reliable transactions with Atomicity, Consistency, Isolation, and Durability (ACID) properties.
3. **Structured Data**: Data is stored in rows and columns, making it easy to query and retrieve.
4. **SQL Queries**: SQL is used to interact with the database and manage data.

#### **Examples of SQL Databases**:

- MySQL
- PostgreSQL
- SQLite
- Oracle Database
- Microsoft SQL Server

---

### **NoSQL Databases**

NoSQL databases are non-relational databases that do not rely on a fixed schema. They are designed for flexibility and scalability, often used to store unstructured or semi-structured data.

#### **Key Features of NoSQL Databases:**

1. **Schema-less**: NoSQL databases don't require a fixed schema, allowing data to be stored dynamically.
2. **Scalability**: NoSQL databases are designed to scale horizontally, handling large data volumes across multiple machines.
3. **Variety of Data Models**: NoSQL databases support document, key-value, column-family, and graph models.
4. **Eventual Consistency**: Many NoSQL databases offer eventual consistency, as opposed to the strict consistency in SQL databases.

#### **Examples of NoSQL Databases**:

- MongoDB (Document-Based)
- Cassandra (Column-Family)
- Redis (Key-Value)
- Couchbase (Document-Based)
- Neo4j (Graph Database)

---

### **Difference Between SQL and NoSQL**

| **Aspect**          | **SQL (Relational)**                                    | **NoSQL (Non-Relational)**                                     |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| **Structure**       | Table-based with rows and columns                       | Flexible structure (document, key-value, column-family, graph) |
| **Schema**          | Fixed schema with predefined data types                 | Schema-less or dynamic schema                                  |
| **Scalability**     | Vertical scaling (adding more power to a single server) | Horizontal scaling (adding more servers)                       |
| **Query Language**  | Uses SQL (Structured Query Language)                    | Varies (e.g., MongoDB uses JavaScript-like queries)            |
| **ACID Compliance** | Yes (supports ACID transactions)                        | No (eventual consistency is often used)                        |
| **Examples**        | MySQL, PostgreSQL, Oracle, SQL Server                   | MongoDB, Cassandra, Redis, Couchbase                           |
| **Use Case**        | Transactional systems, structured data                  | Big Data, real-time applications, unstructured data            |

---
