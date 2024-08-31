require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // console.log(typeof express, "express function here!");
  // console.log(app, "express app here!");
});
console.log(process.env.PORT, "env file");
