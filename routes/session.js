const express = require("express");
const router = express.Router();

const sessionController = require("../controller/session");

router.get("/", sessionController.getAllSessions);
router.post("/", sessionController.createSession);
router.patch("/:id", sessionController.updateSessionNotes);

module.exports = router;
