const express = require("express");
const app = express();
let port = 3000;

app.use((req, res) => {
  console.log("Request Received");

  res.send("Hellow from Express!");
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
