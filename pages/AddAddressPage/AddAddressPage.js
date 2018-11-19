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
var AddAddressPage = /** @class */ (function (_super) {
    __extends(AddAddressPage, _super);
    function AddAddressPage(countryname) {
        var _this = _super.call(this) || this;
        _this.signininitialbtn = "//span[contains(text(),'Sign in')]";
        _this.loginemailtextbox = "//input[@id ='ap_email']";
        _this.passwordtextbox = "//input[@id ='ap_password']";
        _this.signinsubmitbtn = "//input[@id ='signInSubmit']";
        _this.hellobtn = "//span[contains(text(),'Account & Lists') and @class = 'nav-line-2']";
        _this.youraccountlink = "//span[contains(text(),'Your Account')]";
        _this.youraddressimgbtn = "//img[@alt ='Your Addresses']";
        _this.youraddresstext = "//h1[contains(text(),'Your Addresses')]";
        _this.addaddressplusimage = "//div[@id ='ya-myab-plus-address-icon']";
        _this.countrydropdown = "//span[@class ='a-dropdown-prompt' and contains(text(),'" + countryname + "')]";
        _this.fullnametextbox = "//input[@name='address-ui-widgets-enterAddressFullName']";
        _this.addressline1textbox = "//input[@name='address-ui-widgets-enterAddressLine1']";
        _this.addressline2textbox = "//input[@name='address-ui-widgets-enterAddressLine2']";
        _this.citytextbox = "//input[@name='address-ui-widgets-enterAddressCity']";
        _this.statetextbox = "//input[@name='address-ui-widgets-enterAddressStateOrRegion']";
        _this.postalcodetextbox = "//input[@name='address-ui-widgets-enterAddressPostalCode']";
        _this.phonetextbox = "//input[@name='address-ui-widgets-enterAddressPhoneNumber']";
        _this.addaddressbtn = "//input[@class='a-button-input']";
        _this.logoutbtn = "//span[contains(text(),'Sign Out') and @class = 'nav-text']";
        return _this;
    }
    AddAddressPage.prototype.clickonInitialSign = function () {
        var clicksignin = protractor_1.element(protractor_1.by.css("a#nav-link-accountList"));
        var clicksignbtn = protractor_1.element(protractor_1.by.xpath("div[@id='nav-flyout-ya-signin']/a[@class ='nav-action-button']/span[@class='nav-action-inner']"));
        this.myClick(clicksignin, "Click sigininitial button");
        this.mouseHoverClick(clicksignbtn, "Click sigininitial button");
        clicksignbtn.click();
    };
    AddAddressPage.prototype.enterEmail = function (keys) {
        var enterEmail = protractor_1.element(protractor_1.by.xpath(this.loginemailtextbox));
        enterEmail.sendKeys(keys);
    };
    AddAddressPage.prototype.enterPassword = function (keys) {
        var enterPassword = protractor_1.element(protractor_1.by.xpath(this.passwordtextbox));
        if (enterPassword.isDisplayed()) {
            enterPassword.sendKeys(keys);
        }
        else {
            console.log("enter Password failed");
        }
    };
    AddAddressPage.prototype.clickonSignSubmitbutton = function () {
        var clicksigninbtn = protractor_1.element(protractor_1.by.xpath(this.signinsubmitbtn));
        if (clicksigninbtn.isDisplayed()) {
            clicksigninbtn.click();
        }
        else {
            console.log("click signon submit failed");
        }
    };
    AddAddressPage.prototype.clickonHellobutton = function () {
        var clickonhellobtn = protractor_1.element(protractor_1.by.xpath(this.hellobtn));
        if (clickonhellobtn.isDisplayed()) {
            //clickonhellobtn.click();
            protractor_1.browser.actions().doubleClick(clickonhellobtn).perform();
        }
        else {
            console.log("unable hello button failed");
        }
    };
    AddAddressPage.prototype.clickonAddAddressImage = function () {
        var clickonAddAddressImage = protractor_1.element(protractor_1.by.xpath(this.youraddressimgbtn));
        if (clickonAddAddressImage.isDisplayed()) {
            clickonAddAddressImage.click();
        }
        else {
            console.log("unable to click on add address failed");
        }
    };
    AddAddressPage.prototype.clickonAddAddressPlusimage = function () {
        var clickonAddAddressPlusimage = protractor_1.element(protractor_1.by.xpath(this.addaddressplusimage));
        if (clickonAddAddressPlusimage.isDisplayed()) {
            clickonAddAddressPlusimage.click();
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to click on add address failed");
        }
    };
    AddAddressPage.prototype.selectcountryname = function (keys) {
        var selectcountryname = protractor_1.element(protractor_1.by.xpath(this.countrydropdown));
        if (selectcountryname.isDisplayed()) {
            this.dropDown(this.countrydropdown, "select Country name");
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to select Country name");
        }
    };
    AddAddressPage.prototype.enterFullNameAddress = function (keys) {
        var enterFullNameAddress = protractor_1.element(protractor_1.by.xpath(this.fullnametextbox));
        if (enterFullNameAddress.isDisplayed()) {
            enterFullNameAddress.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter full name address");
        }
    };
    AddAddressPage.prototype.enterAddressline1textbox = function (keys) {
        var enterAddressline1textbox = protractor_1.element(protractor_1.by.xpath(this.addressline1textbox));
        if (enterAddressline1textbox.isDisplayed()) {
            enterAddressline1textbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter address line1");
        }
    };
    AddAddressPage.prototype.enterAddressline2textbox = function (keys) {
        var enterAddressline2textbox = protractor_1.element(protractor_1.by.xpath(this.addressline1textbox));
        if (enterAddressline2textbox.isDisplayed()) {
            enterAddressline2textbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to select address line2");
        }
    };
    AddAddressPage.prototype.enterCitytextbox = function (keys) {
        var enterCitytextbox = protractor_1.element(protractor_1.by.xpath(this.citytextbox));
        if (enterCitytextbox.isDisplayed()) {
            enterCitytextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter city");
        }
    };
    AddAddressPage.prototype.enterStatetextbox = function (keys) {
        var enterStatetextbox = protractor_1.element(protractor_1.by.xpath(this.statetextbox));
        if (enterStatetextbox.isDisplayed()) {
            enterStatetextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter city");
        }
    };
    AddAddressPage.prototype.enterZipcodetextbox = function (keys) {
        var enterZipcodetextbox = protractor_1.element(protractor_1.by.xpath(this.postalcodetextbox));
        if (enterZipcodetextbox.isDisplayed()) {
            enterZipcodetextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter Zipcode");
        }
    };
    AddAddressPage.prototype.enterPhonenumbertextbox = function (keys) {
        var enterPhonenumbertextbox = protractor_1.element(protractor_1.by.xpath(this.phonetextbox));
        if (enterPhonenumbertextbox.isDisplayed()) {
            enterPhonenumbertextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to enter Phone number");
        }
    };
    AddAddressPage.prototype.clickonAddAddressbutton = function () {
        var clickonAddAddressbutton = protractor_1.element(protractor_1.by.xpath(this.addaddressbtn));
        if (clickonAddAddressbutton.isDisplayed()) {
            clickonAddAddressbutton.click();
            //browser.actions().doubleClick(clickonaddaddress).perform();
        }
        else {
            console.log("unable to click add add address button");
        }
    };
    AddAddressPage.prototype.logoutamazon = function () {
        var clicksignbtn = protractor_1.element(protractor_1.by.xpath("div[@id='nav-flyout-ya-signin']/a[@class ='nav-action-button']/span[@class='nav-action-inner']"));
        protractor_1.browser.actions().mouseMove(clicksignbtn).perform()
            .then(function () {
            var logoutamazon = protractor_1.element(protractor_1.by.xpath(this.logoutbtn));
            protractor_1.browser.actions().mouseMove(logoutamazon).click();
            console.log("Clicklogout ");
        }, function (err) {
            console.log("Issue while clicking Logout");
        });
    };
    return AddAddressPage;
}(Action_1.Actions));
exports.AddAddressPage = AddAddressPage;
//# sourceMappingURL=AddAddressPage.js.map