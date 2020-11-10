const { query } = require("../index");

const { initialPeople, initialSessions } = require("./seedData");

const populatePersonTable = async () => {
  for (const person of initialPeople) {
    await query(
      `INSERT INTO person(name)
        VALUES ($1) RETURNING *;`,
      [person.name]
    );
  }
};

const populateSessionTable = async () => {
  for (const session of initialSessions) {
    await query(
      `INSERT INTO session(
        timestamp,
        notes,
        mentor_id,
        mentee_id,
        mentor_feedback,
        mentee_feedback
      ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        session.timestamp,
        session.notes,
        session.mentorId,
        session.menteeId,
        session.mentorFeedback,
        session.menteeFeedback,
      ]
    );
  }
};

const populateAllTables = async () => {
  await populatePersonTable();
  await populateSessionTable();
  console.log("Tables should be populated now.");
};

module.exports = { populateAllTables };

if (require.main === module) {
  populateAllTables();
}
