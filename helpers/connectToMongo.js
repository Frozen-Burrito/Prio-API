const mongoose = require('mongoose');

const connectToMongo = async ( mongoURI ) => {
  try {
    const dbConnection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`API connected to MongoDB on ${dbConnection.connection.host}`);
  } catch (error) {
    console.error(`An error occurred while trying to connect to MongoDB: ${error}`);
  }
}

module.exports = connectToMongo;