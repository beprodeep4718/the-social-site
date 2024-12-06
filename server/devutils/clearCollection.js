const User = require("../models/userSchema");

async function clearCollection() {
  try {
    const result = await User.deleteMany({});
    console.log(`Deleted ${result.deletedCount} documents.`);
  } catch (err) {
    console.error("Error deleting documents:", err);
  }
}

module.exports = clearCollection;
