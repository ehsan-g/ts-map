"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
// implements help to follow the error easier to here
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
        color: "red";
    }
    User.prototype.markerContent = function () {
        return "This One";
    };
    return User;
}());
exports.User = User;
