const express = require("express");
const router = express.Router();

/**
 * TODO: need to create:
 *      1. getAllSessions function in models/session.js
 *      2. getAllSessions function in controllers/session.js
 */
router.get("/", () => null);

/**
 * TODO: need to create:
 *      1. createSession function in models/session.js
 *      2. createSession function in controllers/session.js
 */
router.post("/", () => null);

/**
 * TODO: need to create:
 *      1. updateSession function in models/session.js
 *      2. updateSession function controllers/session.js
 */
router.patch("/", () => null);

/**
 * TODO: in app.js, require/import sessionRouter (the router that's been created in this file)
 *      and then app.use("/sessions", sessionRouter)
 */
module.exports = router;
