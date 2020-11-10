const { query } = require("../db/index");

const getAllSessions = async () => {
  const response = await query("SELECT * FROM session;");
  return response.rows;
};

const createSession = async (newSession) => {
  const response = await query(
    `INSERT INTO session(
      timestamp,
      notes,
      mentor_id,
      mentee_id,
      mentor_feedback,
      mentee_feedback
    ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      newSession.timestamp,
      newSession.notes,
      newSession.mentorId,
      newSession.menteeId,
      newSession.mentorFeedback,
      newSession.menteeFeedback,
    ]
  );
  return response.rows[0];
};

// Can only append a single note (for now).
const updateSessionNotes = async (sessionId, notes) => {
  const response = await query(
    `UPDATE session SET notes = $2
      WHERE id = $1 RETURNING *;`,
    [sessionId, notes]
  );
  return response.rows;
};

module.exports = {
  getAllSessions,
  createSession,
  updateSessionNotes,
};
