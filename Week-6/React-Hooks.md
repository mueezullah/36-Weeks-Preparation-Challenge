# 📌 React Hooks

React Hooks are special functions introduced in React 16.8 that allow functional components to use features like state, lifecycle methods, and context, which were previously only available in class components.

They make it easier to write clean, reusable, and maintainable code without converting functions into class components.

### Examples

- `useState` for adding state to a component.
- `useEffect` for handling side effects like, API calls.
- `useContext` for accessing global values.
- `useRef`, `useMemo`, and `useCallback` for advanced use cases and performance optimization.

### ❓ Why were hooks introduced?

Hooks were introduced because there were some issues in class components like,

- Complex and hard-to-manage lifecycle logic
- It was hard to reuse logic that uses state in different components.
- Verbose and less readable code.

> With hooks, functional components become powerful and we can easily handle side effects, state and more with simpler syntax.

---

## 1. `useState`

`useState` is used to handle state in functional components. When you want to store a value in a component and change it in the future, you use `useState`.

### 🔸 Syntax:

```js
const [stateVariable, setStateVariable] = useState(initialValue);
```

- `stateVariable` -> the current value of the state variable.
- `setStateVariable` -> the fucntion used to update the state.
- `initialValue` -> initializes the state with the initial value.

### 🔹 Example (Counter):

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

## 2. `useEffect`

React Hook, that allows you to perform side effects in your functional components.

Side effects include things like:

- Fetching data from an API
- Subscribing to a service
- Setting timers
- Updating the DOM manually

### 🔸 Syntax:

```js
useEffect(() => {
  // code to run (side effect)
}, [dependencies]);
```

`() => { ... }` -> A function that contains the side-effect code you want to run.
`[dependencies]` -> An array of values that tells React when to re-run the effect.

- If it's `[]`, the effect runs only once (on mount).
- If it includes variables, the effect runs when those change.
- If omitted, the effect runs after every render.

### 🔹 Example (Counter):

```js
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs every time 'count' changes
  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 3. `useRef`

`useRef()` is a React hook that gives you a special reference value which does not change when the component re-renders.

- **Referencing DOM elements** — for example, <button>, <input>
- **Storing a value without causing a re-render** — you can keep track of data without updating the UI every time it changes.

### 🔸 Syntax:

```js
const myRef = useRef(initialValue);
```

- `useRef(initialValue)` creates a ref object with a property called `.current`.
- `initialValue` is what you want to store initially.
- `myRef` is the variable name holding the reference object.

### 🔹 Example 1: DOM reference

```js
import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}
```

Here, `inputRef` becomes a reference to the input field.
When the button is clicked, `inputRef.current.focus()` focuses the input field.
This is React's friendly way of accessing the DOM directly.

### 🔹 Example 2: Storing a value without re-rendering

```js
import { useRef, useEffect } from "react";

function Timer() {
  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      count.current += 1;
      console.log("Count:", count.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Check Console</h1>;
}
```

`count` is a `useRef` object.
Every 1 second, `count.current` keeps increasing.
However, the component is not re-rendering.
If you want to track a value without triggering a re-render, `useRef()` is the best choice."

---
