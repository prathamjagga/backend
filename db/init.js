const mongoose = require("mongoose");
const { MONGOURI } = require("../config");

async function connectDB() {
  try {
    await mongoose.connect(MONGOURI);
    console.log("Connected to DB Successfully.");
  } catch (err) {
    console.log("Error Occured while connecting to DB\n", err);
  }
}

module.exports = { connectDB };
