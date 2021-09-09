import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("It works!");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
