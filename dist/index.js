"use strict";

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send("Calculator API");
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});