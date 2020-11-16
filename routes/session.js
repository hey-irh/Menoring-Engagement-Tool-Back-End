const express = require("express");
const router = express.Router();

const sessionController = require("../Controller/session");

router.get("/", sessionController.getAllSessions);
router.post("/", sessionController.createSession);
router.patch("/:id", sessionController.updateSession);
router.delete("/:id", sessionController.deleteSession);

module.exports = router;
