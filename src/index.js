import express from "express";
import { Bus } from "./model/index";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const bus = new Bus();
  res.send(bus.getSpotsNeeded().toString());
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
