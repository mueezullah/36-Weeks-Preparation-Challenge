# React State Management

## 📌 Prop Drilling

Prop drilling is the process of passing data from a parent component to a deeply nested child component through props, even if intermediate components don't use the data.

### 📦 When to Use

- Small applications with simple component hierarchies.
- When only a few components need the data.
- When state management libraries or Context API are overkill.

### Pros

- Simple and straightforward for small apps.
- No additional dependencies or setup.
- Explicit data flow, easy to trace.

### Pros

- Becomes cumbersome in large component trees.
- Intermediate components must pass props they don’t use.
- Harder to maintain as the app scales.

### 📘 Example

- `App` → `Parent` → `Child` → `GrandChild`.
- Only `GrandChild` uses the `user` data, but all intermediate components must pass it.

---

## 📌 Context API / useContext

Context API is a built-in React feature for sharing state across components without prop drilling. It provides a way to create a global state accessible to any component in the tree.

### 📦 When to Use

- Medium-sized applications with shared state (e.g., theme, user data).
- When prop drilling becomes impractical.
- When you want a lightweight solution without external libraries.

### Pros

- Eliminates prop drilling for global state.
- Built into React, no external dependencies.
- Flexible for dynamic state updates.

### Cons

- Can make components harder to reuse (tight coupling to context).
- Overuse can lead to complex state management.
- Performance overhead if not optimized (e.g., with useMemo).

### 🔧 Syntax

```js
const MyContext = createContext(defaultValue);
```

### 📘 Example

```js
import { createContext, useContext, useState } from "react";

// 1. Create a Context
const ThemeContext = createContext();

// 2. Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Provide value to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume Context in a Component
function ThemeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// 4. Use the Provider and Consumer in the App
function App() {
  return (
    <ThemeProvider>
      <h1>Context API Example</h1>
      <ThemeComponent />
    </ThemeProvider>
  );
}

export default App;
```

---

## 📌 useCallBack

`useCallback` is a React Hook that returns a memoized version of a callback function, which only changes if one of the dependencies has changed.

- The function is not executed immediately.
- `useCallback` memoizes the reference to the function — not the result, not the execution.
- It ensures that the same function reference is used between re-renders unless dependencies change.

### 🔧 Syntax

```js
const memoizedCallback = useCallback(() => {
  // callback logic here
}, [dependencies]);
```

### 📦 When to Use `useCallback`

- You're passing a callback to a memoized component (`React.memo`)
- You're seeing performance issues due to frequent re-renders
- The function creation is expensive (e.g., inside loops, animations)

### 📘 Example

```js
import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // ✅ No need to re-create unless dependencies change

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}
```

### 🔁 Without useCallback - Problem

```js
const handleClick = () => {
  console.log("Button clicked");
};
```

> In this case, `handleClick` gets recreated on every render, causing child components that depend on it to re-render unnecessarily.
> Every re-render creates a new function instance with a different reference

### 🧪 Example with `React.memo`

```js
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});
```

> With `useCallback`, `Child` doesn’t re-render on each parent render unless onClick changes.

### ❗Important

- useCallback(fn, []) is like saying "never recreate this function".
- useCallback(fn, [a, b]) says "only recreate if a or b change".

---

## 📘 State Lifting

State Lifting is a concept in React where you move state up to the closest common parent component so that multiple child components can share and access the same state.

### 🧠 Why Lift State?

Sometimes, two or more sibling components need to communicate or share data.

But in React:

- State is local to a component.
- Child components can’t access each other’s state directly.

📦 **Solution**: Move (or "lift") the shared state up to the parent, and pass it down via props.

### 🔧 Example

❌ Without Lifting (No Shared State):

```js
function ComponentA() {
  const [count, setCount] = useState(0);
  return <div>Count A: {count}</div>;
}

function ComponentB() {
  const [count, setCount] = useState(0);
  return <div>Count B: {count}</div>;
}
```

> Here, `ComponentA` and `ComponentB` have their own separate count states.

✅ With Lifting (Shared State):

```js
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComponentA count={count} />
      <ComponentB setCount={setCount} />
    </>
  );
}

function ComponentA({ count }) {
  return <div>Count: {count}</div>;
}

function ComponentB({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
}
```

> Now both components use the same lifted state from the parent.

### 📌 When to Lift State

- Two components need to reflect the same data
- You want controlled inputs or forms
- Sibling components need to communicate via shared state

---

## ⚛️ Recoil

Recoil is a state management library for React, developed by Facebook. It provides a simple, powerful, and scalable way to manage global state in React applications.

Recoil makes it easy to share state across components without lifting state manually or overusing Context API.

### 🔍 Why Use Recoil?

React's built-in state (`useState`, `useReducer`) is:

- Great for local component state
- Not ideal for shared/global state

Recoil solves:

- Prop drilling
- Complex Context trees
- Performance issues with large apps

### 🛠 When to Use Recoil?

- You need global state across multiple components
- You're building a medium-to-large React app
- You want simpler state logic than Redux or Context nesting

### 🧠 Core Concepts of Recoil

| Concept             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| `atom`              | A **piece of state**. Think of it like a `useState` that can be shared. |
| `selector`          | A **derived/computed state** (like a `useMemo` for Recoil).             |
| `useRecoilState`    | Hook to **read & write** atom state (like `useState`).                  |
| `useRecoilValue`    | Hook to **read** atom or selector value.                                |
| `useSetRecoilState` | Hook to **write** to atom without reading it.                           |
| `RecoilRoot`        | A **provider component** that wraps your app and enables Recoil.        |

### ✅ Recoil vs Other State Managers

| Feature        | Recoil      | Context API        | Redux               |
| -------------- | ----------- | ------------------ | ------------------- |
| Learning Curve | Easy ✅     | Easy ⚠️            | Steep ❌            |
| Boilerplate    | Minimal ✅  | Minimal ✅         | High ❌             |
| Async Support  | Built-in ✅ | Manual ❌          | Needs middleware ❌ |
| Performance    | Granular ✅ | Rerenders a lot ❌ | Good ✅             |
| Ecosystem      | Smaller 🟡  | Built-in ✅        | Mature ✅           |

### 🧪 Example: Using atom and useRecoilState

1. Define an atom (shared state)

```js
// state.js
import { atom } from "recoil";

export const countState = atom({
  key: "countState", // unique ID
  default: 0, // default value
});
```

2. Use it in components

```js
import { useRecoilState } from "recoil";
import { countState } from "./state";

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

> ✅ Now any other component using countState will stay in sync automatically.
