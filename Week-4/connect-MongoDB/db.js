const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load env configuration
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log("MongBD Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
