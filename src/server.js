const express = require("express");
const ConnectDB = require("./config/db");
require("dotenv").config();
const urlRoutes = require("./routes/urlRoutes");
const parth = require("path");
const app = express();
const port = process.env.PORT || 3000;

//connection to database
ConnectDB();

app.use(express.json());

app.use("/", urlRoutes);
app.use(express.static('public'));


app.listen(port, () => console.log(`server is running on port: ${port}`));
