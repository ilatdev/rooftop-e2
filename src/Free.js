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
var Free = /** @class */ (function (_super) {
    __extends(Free, _super);
    function Free() {
        var _this = _super.call(this) || this;
        _this.setType('free');
        _this.setPrice(0);
        _this.setDuration(15);
        _this.setAdd(true);
        return _this;
    }
    return Free;
}(Subscription_1["default"]));
exports["default"] = Free;
