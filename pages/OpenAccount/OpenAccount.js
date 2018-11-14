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
var Action_1 = require("../../Action/Action");
var OpenAccount = /** @class */ (function (_super) {
    __extends(OpenAccount, _super);
    function OpenAccount(name) {
        var _this = _super.call(this) || this;
        _this.bankmanagerloginbtn = 'button[ng-click="manager()"]';
        _this.openaccountbtn = 'button[ng-click="openAccount()"]';
        _this.customer = 'select[ng-model="custId"]';
        _this.customerOption = 'option[ng-repeat="cust in Customers"]';
        _this.currency = 'select[ng-model="currency"]';
        _this.currencyOption = 'select[ng-model="currency"]>option';
        _this.processbtn = 'button[type="submit"]';
        return _this;
    }
    OpenAccount.prototype.clickonBankManagerLoginButton = function () {
        var btnlogin = this.bankmanagerloginbtn;
        if (protractor_1.$(btnlogin).isDisplayed()) {
            this.myCssClick(btnlogin, "login");
        }
        else {
            console.log("something wrong with clicking manager login");
        }
    };
    OpenAccount.prototype.clickOpenAccountButton = function () {
        var btn = this.openaccountbtn;
        if (protractor_1.$(btn).isDisplayed()) {
            this.myCssClick(btn, "Open Account Button Clicking");
        }
        else {
            console.log("something wrong with clicking open account button");
        }
    };
    OpenAccount.prototype.clickCustomerDropDown = function () {
        var drpdwn = this.customer;
        this.dropDownCss(drpdwn, "customer dropdown");
        console.log("click customer dropdown: " + drpdwn);
    };
    OpenAccount.prototype.selectCustomer = function (name) {
        var option = this.customerOption;
        console.log(option);
        this.selectByValueCss(option, name, 'asdfasdfasdf');
        //this.selectByValueCss(option, "select customer " + name);
    };
    OpenAccount.prototype.clickCurrencyDropDown = function () {
        var drpdwn = this.currency;
        this.dropDownCss(drpdwn, "currency dropdown");
    };
    OpenAccount.prototype.selectCurrency = function (name) {
        var option = this.currencyOption;
        console.log(option);
        this.selectByValueCss(option, name, "oooooo");
    };
    OpenAccount.prototype.clickProcessButton = function () {
        var btn = this.processbtn;
        this.myCssClick(btn, "processing button");
    };
    return OpenAccount;
}(Action_1.Actions));
exports.OpenAccount = OpenAccount;
//# sourceMappingURL=OpenAccount.js.map