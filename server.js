const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Create instance of Express
const app = express();

// Define port for HTTP server
const PORT = process.env.PORT || 3001;

// Middleware to enable parsing of JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Connect to NoSQL database
db.once("open", () => {
  console.log("Connected to Database");

  // Start HTTP server
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}!`);
  });
});
