import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import express from "express";
const app = express();
import { DB_NAME } from "./constants.js";
const port = process.env.PORT;

// function connectDB() {}
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connected!! with HOST ${process.env.MONGODB_URI}`);
    app.on("error", (error) => {
      console.log("Application not able to talk to the DB", error);
      throw error;
    });

    app.listen(port || 8000, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error in connecting to the DB:", error);
  }
})();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("here we go with the twitter handle");
});
app.get("/intro", (req, res) => {
  res.send("INRTOOO");
});
app.get("/login", (req, res) => {
  res.send(`<h1>Please login</h1>`);
});
