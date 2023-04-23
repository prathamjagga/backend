const mongoose = require("mongoose");

const AdvertisementSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  primaryText: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  CTA: {
    type: String,
    // not required for now
  },
});

AdvertisementSchema.index({
  headline: "text",
  primaryText: "text",
  desc: "text",
  company: "text",
});

module.exports = mongoose.model("Advertisement", AdvertisementSchema);
