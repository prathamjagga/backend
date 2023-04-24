const Advertisement = require("../models/Advertisement");

async function searchAds(req, res) {
  try {
    const query = req.params.query;
    res
      .send({
        success: true,
        result: await Advertisement.find({
          $or: [
            { company: { $regex: query } },
            { headline: { $regex: query } },
            { desc: { $regex: query } },
            { primaryText: { $regex: query } },
          ],
        }),
      })
      .status(200);
  } catch (err) {
    return res
      .send({
        success: false,
        result: [],
        error: err.message,
      })
      .status(500);
  }
}

async function addAd(req, res) {
  try {
    const newAd = new Advertisement(req.body);
    await newAd.save();
    return res
      .send({
        success: true,
      })
      .status(200);
  } catch (err) {
    return res
      .send({
        success: false,
        error: err.message,
      })
      .status(500);
  }
}

module.exports = { searchAds, addAd };
