const { connect } = require("mongoose");
const { config } = require("dotenv");
// const pa
config();

class Mongoose {
  constructor() {}
  connect() {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    return new Promise((resolve, reject) => {
      connect(process.env.MONGO_URI)
        .then(() => {
          return resolve("Connected to MongoDB");
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports.Mongoose = Mongoose;
