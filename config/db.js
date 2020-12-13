process.env.NODE_CONFIG_DIR = './config';

const mongoose = require('mongoose');
const config = require('config');

const mongoURL = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
urlEncode });

    console.log('Connected to MongoDB...');
  } catch (error) {
    console.error(error);

    //exit process
    process.exit(1);
  }
};

module.exports = connectDB;
