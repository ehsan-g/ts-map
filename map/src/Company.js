"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1["default"].company.companyName();
        this.catchPhrase = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
        this.color = "blue";
    }
    Company.prototype.markerContent = function () {
        return "\n    <div>\n      <h6 style='color: " + this.color + "'> " + this.companyName + "</h6>\n    </div>\n    ";
    };
    return Company;
}());
exports.Company = Company;
