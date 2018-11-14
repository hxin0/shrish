"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomer = /** @class */ (function () {
    function AddCustomer() {
        this.bankmanagerloginbtn = 'button[ng-click="manager()"]';
        this.addcustomerbtn = 'button[ng-click="addCust()"]';
        this.firstName = 'input[ng-model="fName"]';
        this.lastName = 'input[ng-model="lName"]';
        this.postcode = 'input[ng-model="postCd"]';
        this.generateCustomerID = 'button[type="submit"]';
    }
    AddCustomer.prototype.clickonBankManagerLoginButton = function () {
        var elcss = protractor_1.$(this.bankmanagerloginbtn);
        if (elcss.isDisplayed()) {
            elcss.click().then(null, function (err) {
                console.log("asdfasdfasdfasdf");
            });
        }
        else {
            console.log("element not displayed");
        }
    };
    AddCustomer.prototype.clickonAddCustomerButton = function () {
        protractor_1.$(this.addcustomerbtn).click();
    };
    AddCustomer.prototype.enterFirstName = function (param) {
        protractor_1.$(this.firstName).sendKeys(param);
    };
    AddCustomer.prototype.enterLastName = function (param) {
        protractor_1.$(this.lastName).sendKeys(param);
    };
    AddCustomer.prototype.enterPostalcode = function (param) {
        protractor_1.$(this.postcode).sendKeys(param);
    };
    AddCustomer.prototype.clickSubmit = function () {
        var submitButton = protractor_1.$(this.generateCustomerID);
        if (submitButton.isDisplayed()) {
            submitButton.click();
        }
        else {
            console.log("Submit button is not displaying");
        }
        var alertDialog = protractor_1.browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then(function (text) {
            console.log("alert is displaying: " + text);
        });
        alertDialog.accept();
    };
    return AddCustomer;
}());
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=bankmanager.js.map