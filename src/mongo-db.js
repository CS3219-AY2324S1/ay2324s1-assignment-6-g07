const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDBAtlas = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    throw error;
  }
};

const disconnectFromMongoDBAtlas = async () => {
  mongoose
    .disconnect()
    .then(() => {
      console.log('Disconnected from MongoDB Atlas');
    })
    .catch((err) => {
      console.error('Error disconnecting from MongoDB Atlas:', err);
    });
};

module.exports = {
  connectToMongoDBAtlas,
  disconnectFromMongoDBAtlas,
};
