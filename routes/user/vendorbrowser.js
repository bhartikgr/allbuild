const express = require("express");
const router = express.Router();
const vendorbrowserController = require("../../controllers/user/vendorbrowserController");

// Define the POST /login route
router.post("/getVendorbrowser", vendorbrowserController.getVendorbrowser);
router.post(
  "/getVendorbrowserProfile",
  vendorbrowserController.getVendorbrowserProfile
);
router.post("/getbrowserEvents", vendorbrowserController.getbrowserEvents);
router.post(
  "/createeventTovendor",
  vendorbrowserController.createeventTovendor
);

module.exports = router;
