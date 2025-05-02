const express = require("express");
const app = express();
const PORT = 3000;

// 200 - OK
app.get("/", (req, res) => {
  res.status(200).send("Success! Status is 200 - OK");
});

// 201 - Created
app.post("/create", (req, res) => {
  res.status(201).send("Resource created. Status is 201 - Created");
});

// 400 - Bad Request
app.post("/bad-request", (req, res) => {
  res.status(400).send("Bad Request. Status is 400 - Bad Request");
});

// 401 - Unauthorized
app.put("/unauthorized", (req, res) => {
  res.status(401).send("Unauthorized. Status is 401 - unauthoruized");
});

// 404 - Not Found
app.delete("/not-found", (req, res) => {
  res.status(404).send("Not Found. Status is 404 - Not Found");
});

app.listen(PORT, (req, res) => {
  console.log(`App running on port: ${PORT}`);
});
