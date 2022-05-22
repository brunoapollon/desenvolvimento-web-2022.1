var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

require("./db/mongo.connection");

var studentRoute = require("./routes/student/student.routes");
var professorRoute = require("./routes/professor/professor.routes");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/crud/students", studentRoute);
app.use("/crud/professors", professorRoute);

module.exports = app;
