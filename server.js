const express = require("express");
const mongoose = require("mongoose");
const routers = require("./Router");
const dotenv = require('dotenv'); 
// require('dotenv').config()
const app = express();
const server = require("http").Server(app);
dotenv.config();


const port = process.env.PORT || 5050;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use('/', routers);

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then((responce) => {
    server.listen(port, () => {
      console.log(`active on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
