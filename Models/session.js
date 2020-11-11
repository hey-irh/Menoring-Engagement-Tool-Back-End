const { query } = require("../db/index");

const getAllSessions = async () => {
  const response = await query(
    `SELECT * FROM session
      ORDER BY timestamp;`
  );
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

// const updateSessionNotes = async (sessionId, notes) => {

//   const response = await query(
//     `UPDATE session SET notes = $2
//       WHERE id = $1 RETURNING *;`,
//     [sessionId, notes]
//   );
//   return response.rows;
// };

const updateSession = async (sessionId, updates) => {
  const { notes, menteeFeedback, mentorFeedback } = updates;
  const response = await query(
    `UPDATE session
    SET (notes, mentee_feedback, mentor_feedback) = ($2, COALESCE($3, mentee_feedback), COALESCE($4, mentor_feedback))
    WHERE id = $1 RETURNING *;`,
    [sessionId, notes, menteeFeedback, mentorFeedback]
  );
  return response.rows;
};

//similar async function

module.exports = {
  getAllSessions,
  createSession,
  updateSession,
};
