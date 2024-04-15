const express = require("express");
const app = express();
const AppRoutes = require('./src/routes');
const cors = require('cors');
const parser = require('body-parser');
const PORT = 5000; 
app.use(express.json());
app.use('/', AppRoutes);
const { initializeDB } = require("./src/database/db");
// INITIALIZE DB CONNECTION
initializeDB();

// PARSE INCOMING BODY AS JSON
app.use(parser.json())

// Enable CORS
app.use(cors())


app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});


