# 🚀 React Basics Guide

Welcome! This document walks you through the most essential concepts in React. If you're just starting out, this guide will help you understand how React works under the hood through simple explanations and examples.

---

## 📘 1. What is JSX?

JSX stands for **JavaScript XML**. It allows you to write HTML-like syntax directly inside JavaScript.

```jsx
const element = <h1>Hello, React!</h1>;
```

> JSX is not required in React, but it makes writing UI code much easier and more readable.

---

## 🧱 2. Components

Components are the building blocks of a React app. They can be created as functions or classes.

### Functional Component:

```js
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

### Class Component:

```js
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}
```

---

## 📦 3. Props (Properties)

Props allow you to pass data from a parent component to a child component.

```js
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greet name="Ali" />;
```

> Props are read-only and cannot be changed by the child component.

---

## 🔁 4. State

State lets components create and manage their own data.

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
```

> Think of `state` as private data that belongs to a component and can change over time.

---

## 🔢 5. Lists and Keys

Use `.map()` to render a list of elements in React.

```js
const fruits = ["Apple", "Banana", "Cherry"];

const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
```

> Always add a `key` prop when rendering lists to help React identify elements.

---

## 🧠 6. Conditional Rendering

Use JS conditions inside JSX to render content based on logic.

```js
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}
```

---

## 🪄 7. Component Composition

React encourages composition: build UIs by combining smaller components.

```js
function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// Usage
<Card title="React Basics" content="Learn props, state, hooks..." />;
```

---
