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

# 🛡️ Cryptography & Web Security Interview Q&A

This README provides essential **interview questions and answers** on the following topics:

- Important Cryptography Concepts
- Hashing
- Encryption
- JSON Web Tokens (JWT)
- Local Storage
- Sending Data Through an HTTP Server

---

## 🔐 1. Important Cryptography Concepts

### Q1. What is cryptography?

**Answer**: Cryptography is the science of securing data by converting it into an unreadable format using mathematical techniques, ensuring confidentiality, integrity, authentication, and non-repudiation.

### Q2. What are the types of cryptography?

**Answer**:

- **Symmetric Key Cryptography**: Same key for encryption and decryption.
- **Asymmetric Key Cryptography**: Public key for encryption, private key for decryption.

### Q3. What is the difference between hashing and encryption?

**Answer**:

- **Hashing** is one-way and irreversible (used for data integrity).
- **Encryption** is two-way and reversible with a key (used for data confidentiality).

---

## 🧮 2. Hashing

### Q1. What is hashing?

**Answer**: Hashing converts any input into a fixed-length string using a hash function (e.g., SHA-256). It is irreversible and ensures data integrity.

### Q2. What are some common hashing algorithms?

**Answer**: MD5, SHA-1, SHA-256, SHA-512.

### Q3. Why is hashing used in password storage?

**Answer**: Storing a hash of the password instead of the actual password protects user data. Even if hashes are leaked, they cannot be reversed easily.

### Q4. What is a collision in hashing?

**Answer**: When two different inputs produce the same hash output, it’s called a collision. Good hashing algorithms minimize this possibility.

---

## 🔐 3. Encryption

### Q1. What is encryption?

**Answer**: Encryption is the process of converting plaintext into ciphertext to protect it from unauthorized access.

### Q2. Difference between symmetric and asymmetric encryption?

**Answer**:

- **Symmetric**: One key is used for both encryption and decryption.
- **Asymmetric**: Uses a public key for encryption and a private key for decryption.

### Q3. What are common symmetric encryption algorithms?

**Answer**: AES, DES, Blowfish.

### Q4. What are common asymmetric encryption algorithms?

**Answer**: RSA, ECC (Elliptic Curve Cryptography).

---

## 🪙 4. JSON Web Tokens (JWT)

### Q1. What is a JWT?

**Answer**: A JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information between parties as a JSON object.

### Q2. What are the parts of a JWT?

**Answer**:

- **Header**: Algorithm & token type
- **Payload**: Data or claims
- **Signature**: Ensures data integrity

### Q3. How is a JWT verified?

**Answer**: By decoding the token using a secret (for HMAC) or a public key (for RSA) and checking if the signature matches.

### Q4. Is JWT secure?

**Answer**: JWTs are secure if the secret or private key is kept confidential and strong algorithms (like HS256 or RS256) are used.

---

## 💾 5. Local Storage

### Q1. What is local storage in the browser?

**Answer**: Local storage is a Web API that allows storing key-value pairs in the user's browser with no expiration time.

### Q2. How is local storage different from session storage?

**Answer**:

- **Local Storage** persists even after the browser is closed.
- **Session Storage** is cleared when the browser or tab is closed.

### Q3. Is local storage secure?

**Answer**: No, data in local storage is accessible via JavaScript and can be read by attackers through XSS if the site is vulnerable.

### Q4. What data should NOT be stored in local storage?

**Answer**: Sensitive information like passwords, tokens, or personal data.

---

## 🌐 6. Sending Data Through an HTTP Server

### Q1. What is an HTTP request?

**Answer**: It’s a message sent by the client to request resources or data from the server.

### Q2. What are the common HTTP methods?

**Answer**:

- **GET**: Retrieve data
- **POST**: Send new data
- **PUT/PATCH**: Update existing data
- **DELETE**: Remove data

### Q3. What are status codes in HTTP?

**Answer**:

- **200**: OK
- **201**: Created
- **400**: Bad Request
- **401**: Unauthorized
- **404**: Not Found
- **500**: Server Error

### Q4. How do you send JSON data to a server using Fetch API in JavaScript?

```js
fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
});
```

### Q5. How do you handle HTTP errors in JavaScript?

```js
fetch("/api/data")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---
