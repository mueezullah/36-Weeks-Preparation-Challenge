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
