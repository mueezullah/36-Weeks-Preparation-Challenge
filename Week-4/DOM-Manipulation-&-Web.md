# 🌐 DOM Manipulation & Web Concepts

Welcome to this beginner-friendly repository where you’ll learn and practice **core JavaScript DOM manipulation techniques** and understand key differences between static and dynamic websites.

## 🚀 Topics

This repository covers:

- `document.createElement()`
- `document.querySelector()`
- `document.getElementById()`
- `document.querySelectorAll()`
- `element.appendChild()` & `element.append()`
- `element.remove()` & `parent.removeChild()`
- Static vs Dynamic Websites

---

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

| Feature      | Static Website            | Dynamic Website                                    |
| ------------ | ------------------------- | -------------------------------------------------- |
| Content      | Fixed, same for all users | Changes based on user or interaction               |
| Technologies | HTML, CSS                 | HTML, CSS, JavaScript, Server-side (e.g., Node.js) |
| Example      | Portfolio, landing pages  | Social media, e-commerce                           |

---
