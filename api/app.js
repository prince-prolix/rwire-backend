import express from "express";
import { router as rwire_routes } from "../api/routes/rwire-routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
const app = express();
const PORT = 8000;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Researchwire",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://192.168.2.186:8000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

// app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json()); // to read json data

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
