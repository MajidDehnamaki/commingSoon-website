const express = require("express");
const notFoundController = require("../controllers/not-found");

const router = express.Router();

router.get(notFoundController.get404Page);

module.exports = router;
