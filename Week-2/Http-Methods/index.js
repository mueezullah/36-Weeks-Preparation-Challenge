const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("GET REQ a gai hoho");
  res.sendFile("./send.html", { root: __dirname });
});

app.post("/items", (req, res) => {
  res.send("Got a POST Request");
});

app.put("/items/id", (req, res) => {
  res.send("GOt a PUT Request");
});

app.delete("/items/id", (req, res) => {
  res.send("Got a DELETE Request");
});

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
