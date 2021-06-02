"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Basic_1 = require("./Basic");
var Premium_1 = require("./Premium");
var Ian = new User_1["default"]("Ian");
var Omega = new User_1["default"]("Omega", new Basic_1["default"]);
var Alfa = new User_1["default"]("Alfa", new Premium_1["default"]);
console.log(Ian);
console.log("################################");
console.log(Omega);
console.log("################################");
console.log(Alfa);
console.log("################################");
Ian.setSubscription(new Premium_1["default"]);
console.log(Ian);
