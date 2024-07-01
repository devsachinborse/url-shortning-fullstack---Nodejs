const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Database connection successfully");
  } catch (error) {
    console.error("Error connection to DB: ", err);
  }
};

module.exports = ConnectDB;
