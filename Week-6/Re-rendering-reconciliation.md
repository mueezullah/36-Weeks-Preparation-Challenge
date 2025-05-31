# ⚛️ React: Re-rendering vs Reconciliation

---

## 🔁 What is Re-rendering?

**Re-rendering** happens when a React component’s state or props change, causing it to re-run its `render()` method or function body (in functional components).

### 📌 Triggers:

- State changes via `useState`, `setState`, etc.
- Props change (passed from parent components).
- Context values change (when using `useContext`)

### 📦 What happens:

- React detects a change in state/props/context.
- Creates a new Virtual DOM tree.
- Diffs it with the previous Virtual DOM.
- Applies only the necessary changes to the real DOM (efficient update).

### 💡 Example:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

> Each time `setCount` is called, the component re-renders and generates a new virtual representation of the UI.

---

## 🔄 What is Reconciliation?

**Reconciliation** is the process React uses to compare the new Virtual DOM (after re-render) with the previous Virtual DOM, and then update the real DOM with the minimal number of operations.

### ⚙️ How It Works:

**Virtual DOM Comparison**:

- React keeps a lightweight copy of the real DOM called the Virtual DOM.
- When there is a change in state or props, React creates a new Virtual DOM tree.

**Diffing Algorithm**:

- React compares the new Virtual DOM with the previous one using a diffing algorithm.
- It identifies what has changed (e.g., text, attributes, elements).

**Efficient Updates**:

- Based on the differences found, React updates only the parts of the actual DOM that changed.

### 🧠 Example:

```js
function Counter() {
  const [count, setCount] = React.useState(0);

  return <h1>{count}</h1>;
}
```

When `count` changes from `0` to `1`, React:

- Renders a new Virtual DOM with `<h1>1</h1>`.
- Compares it to the old one `<h1>0</h1>`.
- Finds the difference (`0` → `1`) and updates only the text node in the real DOM.

---

## Diff btw Re-rendering & Reconciliation

| Aspect                | Re-rendering                 | Reconciliation                             |
| --------------------- | ---------------------------- | ------------------------------------------ |
| **What it is**        | Re-running the render method | Diffing and updating the real DOM          |
| **When it happens**   | On state/prop change         | After re-rendering                         |
| **Output**            | New Virtual DOM              | Efficient updates to real DOM              |
| **Performance focus** | Not directly                 | Yes – minimizes real DOM operations        |
| **React’s role**      | Calls render() again         | Uses diffing algorithm & updates DOM nodes |

### 🧵 Real-world Analogy:

- **Re-rendering** = Writing a new draft of a document.

- **Reconciliation** = Comparing the new draft to the previous one and highlighting only the differences to apply changes.

---
