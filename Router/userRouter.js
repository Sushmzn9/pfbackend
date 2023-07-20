import express from "express";
import { insertUser } from "../components/Model/userModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "status",
      message: "here is message",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
  console.log(req.body);
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "New msg has been created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to send message, try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: status.message,
    });
  }
});

export default router;
