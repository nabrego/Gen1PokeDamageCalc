const express = require("express");
const { calcDamage } = require("../controllers/damCalcController");
const router = express.Router();

router.post("/calculate-damage", calcDamage);

module.exports = router;