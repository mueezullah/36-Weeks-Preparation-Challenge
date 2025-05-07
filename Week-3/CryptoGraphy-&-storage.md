# 🛡️ Cryptography Concepts

**Cryptography** is the art of protecting information by transforming it into an unreadable format, only readable by someone who has the secret key.

### 🔑 Goals:

- **Confidentiality:** Prevent unauthorized access
- **Integrity:** Ensure data isn’t changed
- **Authentication:** Verify identities
- **Non-repudiation:** Prevent denial of sending/receiving

---

## 🔍 Hashing

**Hashing** is a one-way function that converts input data into a fixed-length string. You cannot reverse it back to the original input.

### ✅ Characteristics:

- Fixed output length
- Fast to compute
- One-way (irreversible)
- Collision-resistant

### 📌 Use Case:

- Storing passwords securely

### 🔧 Example (Node.js):

```js
const crypto = require("crypto");
const password = "mysecretpassword";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log("Hashed password:", hash);
```

---

## 🔐 Encryption

**Encryption** is a two-way process that converts readable data into an unreadable format, and can be decrypted back using a key.

### 📦 Types:

- **Symmetric Encryption:** Same key to encrypt and decrypt

- **Asymmetric Encryption:** Public key to encrypt, private key to decrypt

### 📌 Use Case:

- Protecting confidential data

### Example (Node.js):

```js
const crypto = require("crypto");
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // Initialization vector

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update("Hello world!", "utf8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted message:", encrypted);
```

---

# 📦 JSON Web Tokens (JWT)

**JWT** is a compact, secure way of transmitting data between parties as a JSON object. It's often used in authentication.

### 🧱 Structure:

```js
HEADER.PAYLOAD.SIGNATURE;
```

- **Header:** Token type and algorithm
- **Payload:** User data (e.g., id, role)
- **Signature:** Ensures integrity

### 🔧 Example (Node.js):

```js
const jwt = require("jsonwebtoken");
const token = jwt.sign({ userId: 123 }, "secretKey", { expiresIn: "1h" });
console.log("JWT Token:", token);
```

---

# 💾 Local Storage

**Local Storage** is a browser-based storage system to store data in key-value pairs. Data persists even after a page refresh.

### 🔧 Example:

```js
// Store
localStorage.setItem("theme", "dark");

// Retrieve
const theme = localStorage.getItem("theme");

// Remove
localStorage.removeItem("theme");
```

---

# 📤 Sending Data Through an HTTP Server

This involves sending data from client to server using HTTP methods like `POST`.

## ✅ Tools:

- Fetch API (client)
- Express.js (server)

### 🔧 Client Example:

```js
fetch("http://localhost:3000/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Alice", age: 21 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### 🔧 Server Example (Express):

```js
const express = require("express");
const app = express();
app.use(express.json());

app.post("/data", (req, res) => {
  console.log(req.body); // { name: "Alice", age: 21 }
  res.send("Data received!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

# 📚 Summary Table

| Concept       | Type          | Reversible? | Use Case             |
| ------------- | ------------- | ----------- | -------------------- |
| Hashing       | One-way       | ❌          | Password storage     |
| Encryption    | Two-way       | ✅          | Confidential data    |
| JWT           | Token Format  | ✅          | User authentication  |
| Local Storage | Web API       | ✅          | Browser data storage |
| HTTP Requests | Communication | ✅          | Send/receive data    |

---
