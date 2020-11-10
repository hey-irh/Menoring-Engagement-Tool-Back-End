const sessionModel = require("../models/session");

const getAllSessions = async (req, res, next) => {
  res.json({
    success: true,
    payload: await sessionModel.getAllSessions(),
  });
};

const createSession = async (req, res, next) => {
  res.json({
    success: true,
    payload: await sessionModel.createSession(req.body),
  });
};

// Front end will need to send notes as an array.
const updateSessionNotes = async (req, res, next) => {
  res.json({
    success: true,
    payload: await sessionModel.updateSessionNotes(req.params.id, req.body),
  });
};

module.exports = {
  getAllSessions,
  createSession,
  updateSessionNotes,
};
