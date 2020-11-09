const { query } = require("../index");

const dropPersonTable = async () => {
  return await query("DROP TABLE IF EXISTS person;");
};

const dropSessionTable = async () => {
  return await query("DROP TABLE IF EXISTS session;");
};

const dropAllTables = async () => {
  await dropSessionTable(); // Drop this one first because it refers to the other table.
  await dropPersonTable();
  console.log("Tables should be deleted now.");
};

module.exports = { dropAllTables };

if (require.main === module) {
  dropAllTables();
}
