const express = require("express");
const bp = require("body-parser");

const { connectDB } = require("./db/init"); // connect to database
const adRoute = require("./routes/Advertisement");
const Advertisement = require("./models/Advertisement");

const app = express();

async function main() {
  await connectDB();
  app.use(express.json());
  app.use("/api/ads", adRoute);
  //   app.get("/", (req, res) => clg(req.body));
  app.listen(5000, () => console.log("Welcome to backend"));
}

main();
