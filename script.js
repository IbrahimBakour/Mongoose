const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

run();

async function run() {
  try {
    const user = await User.insertMany({
      name: "Manea",
      age: 24,
      gender: "Man",
    });
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}
