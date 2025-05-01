const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("GET Request Received");
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/items", (req, res) => {
  // res.send("POST Request Received");
  res.json({ a: 1, b: 2, c: 3 });
});

app.put("/about", (req, res) => {
  res.send("PUT Request Received");
});

app.delete("/other", (req, res) => {
  res.send("DELETE Request Received");
});

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
