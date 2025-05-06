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
