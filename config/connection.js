// Import Mongoose library
const mongoose = require("mongoose");

// Connect to MongoDB database using Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/socialNetworkDB");

// Export connection
module.exports = mongoose.connection;
