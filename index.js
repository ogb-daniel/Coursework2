const express = require("express");
const cors = require("cors");
const app = express();

app.get("/lessons", (req, res) => {
  res.send(lessons);
});
app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
