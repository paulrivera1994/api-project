const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 5035;

const cars = [
  { brand: "Dodge", car: "Charger" },
  { brand: "Ford", car: "Mustang" },
];

app.get("/", (req, res) => {
  res.json(cars);
});

app.get("/cars/:id", (req, res) => {
  res.json(cars[parseInt(req.params.id) - 1]);
});

app.post("/cars", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});

app.put("/cars/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({ message: `updated car ${req.params.id}` });
});
app.delete("/cars/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: `deleting car ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
