# React State Management

## Prop Drilling

Prop drilling is the process of passing data from a parent component to a deeply nested child component through props, even if intermediate components don't use the data.

### When to Use

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

### Example

- `App` → `Parent` → `Child` → `GrandChild`.
- Only `GrandChild` uses the `user` data, but all intermediate components must pass it.

---

## Context API / useContext

Context API is a built-in React feature for sharing state across components without prop drilling. It provides a way to create a global state accessible to any component in the tree.

### When to Use

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

### Syntax

```js
const MyContext = createContext(defaultValue);
```

### Example

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

## Recoil

## useCallBack
