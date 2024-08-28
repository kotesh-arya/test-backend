// const { readFile, readFileSync } = require("fs").promises;
// // const txt = readFileSync("./hello.txt", "utf8");

// async function sample() {
//   const file = await readFile("./hello.txt", "utf8");
//   console.log(file);
// }
// sample();
// // readFile("./hello.txt", "utf8", (err, txt) => {
// //   console.log(txt);
// // });
// console.log("Do this Asap");

const express = require("express");
const { readFile } = require("fs").promises;

const app = express();
app.get("/", async (request, response) => {
  //   readFile("./home.html", "utf8", (err, html) => {
  //     if (err) {
  //       response.status(500).send("Sorry out of order!!");
  //     }
  //     response.send(html);
  //   });

  response.send(await readFile("./home.html", "utf8"));
});

app.listen(3000, () => {
  console.log(
    `App is running live to handle requests on http://localhost:3000`
  );
});
