const router = require("express").Router();

const controllers = require("../controllers/Advertisement");

router.get("/search/:query", controllers.searchAds);
router.post("/new", controllers.addAd);

module.exports = router;
