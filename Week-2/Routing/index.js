const express = require("express");
const app = express();
let port = 8000;

// Import the item file
const item = require("./routes/item");
const second = require("./routes/second");

// load into app
app.use("/api", item);
app.use("/user", second);

// -> /item/ -> get req
// -> /item/items -> post req
// -> /item/about -> put req
// -> item/other -> del req

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
