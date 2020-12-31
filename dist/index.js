"use strict";

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send("Calculator API");
});
app.get('/sum', function (req, res) {
  var _req$query = req.query,
      _req$query$a = _req$query.a,
      a = _req$query$a === void 0 ? 0 : _req$query$a,
      _req$query$b = _req$query.b,
      b = _req$query$b === void 0 ? 0 : _req$query$b;
  var sum = (0, _add["default"])(parseInt(a), parseInt(b));
  res.json({
    sum: sum
  });
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});