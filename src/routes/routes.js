const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsappControllers");

router.get("/", whatsappController.VerifyToken);
router.post("/", whatsappController.ReceivedMessage);

module.exports = router;
