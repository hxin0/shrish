"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Actions_1 = require("../Action/Actions");
var AddCustomer = /** @class */ (function (_super) {
    __extends(AddCustomer, _super);
    function AddCustomer() {
        var _this = _super.call(this) || this;
        _this.clickAddCustomer = "//button[@ng-click='addCust()']";
        _this.firstName = "//input[@ng-model='fName']";
        _this.lastName = "//input[@ng-model='lName']";
        _this.postcode = "//input[@ng-model='postCd']";
        _this.addCustomer = "//button[@type='submit']";
        return _this;
    }
    AddCustomer.prototype.clickAddCustomerButton = function () {
        this.myClick(this.clickAddCustomer, "Click on Add Customer button");
    };
    AddCustomer.prototype.enterFirstName = function (keys) {
        this.mySendKeys(this.firstName, "Enter first name", keys);
    };
    AddCustomer.prototype.enterLastName = function (keys) {
        this.mySendKeys(this.lastName, "Enter last name", keys);
    };
    AddCustomer.prototype.enterPostcode = function (keys) {
        this.mySendKeys(this.postcode, "Enter postcode", keys);
    };
    AddCustomer.prototype.submitAddCustomer = function () {
        this.myClick(this.addCustomer, "Submit");
        var alertDialog = protractor_1.browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then(function (text) {
            console.log("alert is displaying: " + text);
        });
        alertDialog.accept();
    };
    return AddCustomer;
}(Actions_1.Actions));
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=addCustomer.js.map