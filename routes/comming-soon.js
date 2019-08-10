const express = require("express");
const commingSoonController = require("../controllers/comming-soon/comming-soon");

const router = express.Router();

router.get("/", commingSoonController.getCommingSoonPage);

module.exports = router;
