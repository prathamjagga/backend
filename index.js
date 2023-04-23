const express = require("express");

const { connectDB } = require("./db/init"); // connect to database

const app = express();

async function main() {
  await connectDB();
  app.listen(5000, () => console.log("Welcome to backend"));
}

main();
