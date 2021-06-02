"use strict";
exports.__esModule = true;
var Subcription = /** @class */ (function () {
    function Subcription() {
    }
    Subcription.prototype.getType = function () {
        return this.type;
    };
    Subcription.prototype.getDuration = function () {
        return this.duration;
    };
    Subcription.prototype.getPrice = function () {
        return this.price;
    };
    Subcription.prototype.getAdd = function () {
        return this.adds;
    };
    Subcription.prototype.setType = function (type) {
        this.type = type;
    };
    Subcription.prototype.setDuration = function (time) {
        this.duration = time;
    };
    Subcription.prototype.setPrice = function (price) {
        this.price = price;
    };
    Subcription.prototype.setAdd = function (adds) {
        this.adds = adds;
    };
    return Subcription;
}());
exports["default"] = Subcription;
