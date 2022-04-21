const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const lessons = [
  {
    topic: " math ",
    location: " London ",
    price: 100,
  },
  {
    topic: " math ",
    location: " L i v e r p o o l ",
    price: 80,
  },
  {
    topic: " math ",
    location: " Oxford ",
    price: 90,
  },
  {
    topic: " math ",
    location: " B r i s t o l ",
    price: 120,
  },
];
const user = [
  { " email ": " user@email . com ", " password ": " mypassword " },
];

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/lessons", (req, res) => {
  res.send(lessons);
});
app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});
