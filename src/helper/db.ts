const mongoose = require("mongoose");

const url =
  "mongodb+srv://munkhbold260:Wo8MXuBEhGiN9anI@cluster0.kpyvzjl.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("sdjbshd");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
