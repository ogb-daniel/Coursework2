const express = require("express");
const cors = require("cors");
const app = express();

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
