const express = require("express");
const app = express();
const connectDB = require("./db");
const users = require("./Routes/users");

const PORT = 3001;

// body parser
app.use(express.json());
// connect to database
connectDB();

app.use("/api", users);
// -> /api/users

app.get("/", (req, res) => {
  console.log("I am inside home page route handler");
  res.send("Hello, Welcome to this page!");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
