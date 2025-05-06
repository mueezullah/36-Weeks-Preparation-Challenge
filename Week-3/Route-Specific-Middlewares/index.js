const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes/route");

// mounting the routes
app.use("/api", route);

// -> /api/student
// -> /api/admin

app.get("/", (req, res) => {
  res.send("Request Received");
});

app.listen(port, () => {
  console.log(`App is listening on the port: ${port}`);
});
