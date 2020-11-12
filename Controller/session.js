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
const updateSession = async (req, res, next) => {
  res.json({
    success: true,
    payload: await sessionModel.updateSession(req.params.id, req.body),
  });
};

const deleteSession = async (req, res, next) => {
  res.json({
    success: true,
    payload: await sessionModel.deleteSession(req.params.id),
  });
};

// similar function for feedback

module.exports = {
  getAllSessions,
  createSession,
  updateSession,
  deleteSession,
};
