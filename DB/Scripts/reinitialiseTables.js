const { createAllTables } = require("./createTables");
const { dropAllTables } = require("./dropTables");
const { populateAllTables } = require("./populateTables");

const reinitialiseAllTables = async () => {
  await dropAllTables();
  await createAllTables();
  await populateAllTables();
  console.log("Tables should be reinitialised now.");
};

if (require.main === module) {
  reinitialiseAllTables();
}
