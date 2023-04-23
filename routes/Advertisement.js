const router = require("express").Router();

const controllers = require("../controllers/Advertisement");

router.get("/", controllers.searchAds);
router.post("/new", controllers.addAd);

module.exports = router;
