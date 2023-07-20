import express from "express";
import { MongoConfig } from "./components/MongoConfig/MongoConfig.js";
import cors from "cors";
const app = express();
const PORT = 8000;

MongoConfig();

app.use(cors());
app.use(express.json());

import userRouter from "./Router/userRouter.js";
app.use("/message", userRouter);

app.use("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "server is running well",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`server is running healthy at http://localhost:${PORT}`);
});
