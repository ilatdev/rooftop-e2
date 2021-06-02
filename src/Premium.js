"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Subscription_1 = require("./Subscription");
var Premium = /** @class */ (function (_super) {
    __extends(Premium, _super);
    function Premium() {
        var _this = _super.call(this) || this;
        _this.setType('premium');
        _this.setPrice(9);
        _this.setDuration(30);
        _this.setAdd(false);
        return _this;
    }
    return Premium;
}(Subscription_1["default"]));
exports["default"] = Premium;