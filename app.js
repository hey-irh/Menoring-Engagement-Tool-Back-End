const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const sessionRouter = require("./routes/session");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/sessions", sessionRouter);

module.exports = app;

console.log([1,2,3].reduce((a,b)=>a+b, 0))