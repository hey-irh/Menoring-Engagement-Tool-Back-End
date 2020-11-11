const { query } = require("../index");

const createPersonTable = async () => {
  // Store name in one column or first+last name in separate columns?
  // Any other attributes for people?
  // e.g interests, experience, back end? front end? full stack? personality type?
  return await query(
    `CREATE TABLE IF NOT EXISTS person (
      id SERIAL PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      short_intro TEXT,
      long_intro TEXT,
      languages TEXT[],
      interests TEXT
    );`
  );
};

const createSessionTable = async () => {
  return await query(
    `CREATE TABLE IF NOT EXISTS session (
      id SERIAL PRIMARY KEY,
      timestamp TIMESTAMP NOT NULL,
      notes text[] NOT NULL,
      mentor_id INTEGER REFERENCES person (id) ON DELETE CASCADE,
      mentee_id INTEGER REFERENCES person (id) ON DELETE CASCADE,
      mentor_feedback INTEGER CHECK (mentor_feedback IS NULL OR mentor_feedback BETWEEN 1 AND 5),
      mentee_feedback INTEGER CHECK (mentee_feedback IS NULL OR mentee_feedback BETWEEN 1 AND 5)
    );`
  );
};

const createAllTables = async () => {
  await createPersonTable();
  await createSessionTable();
  console.log("Tables should be created now.");
};

module.exports = { createAllTables };

// The code inside if block shouldn't run if we're requiring this file somewhere.
if (require.main === module) {
  createAllTables();
}
