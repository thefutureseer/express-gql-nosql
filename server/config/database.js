require('dotenv').config();
const mongoose = require('mongoose');


const uri = process.env.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
};

mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

module.exports = mongoose.connection;