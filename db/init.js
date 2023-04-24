const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Connected to DB Successfully.");
  } catch (err) {
    console.log("Error Occured while connecting to DB\n", err);
  }
}

module.exports = { connectDB };
