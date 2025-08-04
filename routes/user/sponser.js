const express = require("express");
const router = express.Router();
const sponserController = require("../../controllers/user/sponserController");

// Define the POST /login route
router.post("/getSponsers", sponserController.getSponsers);
router.post("/localloadProposal", sponserController.localloadProposal);
router.post("/register", sponserController.register);
router.post("/login", sponserController.login);
router.post("/getEvents", sponserController.getEvents);
router.post("/proposalData", sponserController.proposalData);
router.post("/hostpurchase", sponserController.hostpurchase);

router.post(
  "/getSponsorshipProposal",
  sponserController.getSponsorshipProposal
);
router.post("/registerwithgoogle", sponserController.registerwithgoogle);
router.post("/loginwithgoogle", sponserController.loginwithgoogle);
router.post("/emailBlast", sponserController.emailBlast);
router.post("/getsponsoruser", sponserController.getsponsoruser);
router.post("/getallproposal", sponserController.getallproposal);
router.post("/getproposalbrowser", sponserController.getproposalbrowser);
router.post("/uploadimageVideo", sponserController.uploadimageVideo);
router.post("/getbrowserevents", sponserController.getbrowserevents);

module.exports = router;
