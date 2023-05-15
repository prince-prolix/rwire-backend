import express from "express";
import { router as rwire_routes } from "../api/routes/rwire-routes.js";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(express.json()); // to read json data

// app.use(cors())
app.use("/api/rwire", rwire_routes);
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(PORT, "Hi I am listening");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
