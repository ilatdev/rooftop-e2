"use strict";
exports.__esModule = true;
var Free_1 = require("./Free");
var User = /** @class */ (function () {
    function User(name, subscription) {
        this.id = "RANDOM";
        this.setName(name);
        this.setSubscription(subscription || new Free_1["default"]());
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSubscribtion = function () {
        return this.subscription;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setSubscription = function (subs) {
        this.subscription = subs;
    };
    return User;
}());
exports["default"] = User;
