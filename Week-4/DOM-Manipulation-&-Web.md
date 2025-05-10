# 🌐 DOM Manipulation & Web Concepts

### ✅ `document.createElement()`

Creates a new HTML element using JavaScript.

```js
const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new DIV!";
document.body.appendChild(newDiv);
```

---

### ✅ `document.getElementById()`

Selects an element by its ID.

```js
const header = document.getElementById("main-header");
header.style.color = "blue";
```

---

### ✅ `document.querySelector()`

Selects the first matching element (by class, ID, or tag).

```js
const firstButton = document.querySelector(".btn");
firstButton.textContent = "Clicked!";
```

---

### ✅ `document.querySelectorAll()`

Selects all elements matching a selector (returns a NodeList).

```js
const items = document.querySelectorAll(".list-item");
items.forEach((item) => (item.style.color = "green"));
```

---

### ✅ `appendChild()` vs `append()`

- `appendChild()` adds one node.
- `append()` can add strings or multiple nodes.

```js
const li = document.createElement("li");
li.textContent = "New Item";
document.querySelector("ul").appendChild(li);

// OR
document.querySelector("ul").append("Another item");
```

---

## 🌍 Static vs Dynamic Websites

| Feature             | **Static Website**                         | **Dynamic Website**                                                |
| ------------------- | ------------------------------------------ | ------------------------------------------------------------------ |
| **Definition**      | Pre-built pages with fixed content         | Pages generated dynamically using server-side scripting            |
| **Technology Used** | HTML, CSS, JavaScript (client-side only)   | HTML, CSS, JavaScript + server-side languages (e.g., PHP, Node.js) |
| **Content**         | Same for every user                        | Can change based on user interaction or database                   |
| **Database**        | Not required                               | Usually connected to a database                                    |
| **Speed**           | Fast to load (no processing needed)        | Slower due to backend processing                                   |
| **Interactivity**   | Minimal or none                            | High (e.g., user login, comments, personalized dashboards)         |
| **Maintenance**     | Harder to update (requires manual editing) | Easier with CMS or admin panel                                     |
| **Examples**        | Portfolio, resume, documentation pages     | E-commerce sites, social media, blogs with admin dashboards        |
| **Cost**            | Cheaper and easier to host                 | More expensive due to backend/server needs                         |

---

## 📋 Interview Q&A

### 1. What is the difference between `getElementById()` and `querySelector()`?

- `getElementById()` selects an element by ID only.

- `querySelector()` selects the first matching element using any CSS selector (ID, class, tag, etc.).

---

### 2. What does `createElement()` do in JavaScript?

It creates a new HTML element dynamically using JavaScript.

```js
const div = document.createElement("div");
```

---

### 3. What is the difference between `appendChild()` and `append()`?

- `appendChild()` can only insert one node.
- `append()` can insert multiple nodes or even strings.

```js
parent.appendChild(element); // one node
parent.append("Text", element); // multiple or string
```

---

### 4. What is `querySelectorAll()` and what does it return?

It selects all elements matching a CSS selector and returns a NodeList.

```js
const items = document.querySelectorAll(".item");
```

---

### 5. How can you remove an element using JavaScript?

- Use `.remove()` to directly remove it.
- Or `.removeChild()` on the parent node.

```js
element.remove();
// or
parent.removeChild(child);
```

---

### 6. What is the difference between a static and dynamic website?

- **Static Website:** Fixed content, same for all users, no server interaction.

- **Dynamic Website:** Content changes based on user interaction or backend logic.

---

### 7. What is the purpose of DOM manipulation?

DOM manipulation allows JavaScript to interact with and update HTML elements. It enables dynamic user interface without refreshing the page.

---
