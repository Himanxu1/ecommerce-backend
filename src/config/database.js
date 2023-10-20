const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
const { MONGO_URI } = process.env;

const connect = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      // eslint-disable-next-line no-undef
      process.exit(1);
    });
};

module.exports = { connect };
