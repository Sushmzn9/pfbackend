import mongoose from "mongoose";
export const MongoConfig = async () => {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/pf");
  console.log("mgdb connected");
};
