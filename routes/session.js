const express = require("express");
const router = express.Router();

const sessionController = require("../controller/session");

router.get("/", sessionController.getAllSessions);
router.post("/", sessionController.createSession);
router.patch("/", sessionController.updateSessionNotes);

module.exports = router;
