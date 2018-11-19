"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//
var protractor_1 = require("protractor");
var AddAddressPage_1 = require("../pages/AddAddressPage/AddAddressPage");
//import {async} from "q" ;
protractor_1.browser.waitForAngularEnabled(false);
var jsd = require('../data/testData');
debugger;
//* Object creation for Add AddressPage class**//
//var addAddresspagedetails = new AddAddressPage(jsd.CustomerData1.country);
var addAddresspagedetails = new AddAddressPage_1.AddAddressPage(jsd.CustomerData1.country);
debugger;
describe('Amazon Address Add', function () {
    //* Launch*//
    it('launch Amazon', function () {
        protractor_1.browser.get(jsd.CustomerData1.urlamazon);
        protractor_1.browser.driver.manage().window().maximize();
    });
    it('enter email', function () {
        addAddresspagedetails.enterEmail(jsd.CustomerData1.email);
    });
    it('enter Password', function () {
        addAddresspagedetails.enterPassword(jsd.CustomerData1.password);
    });
    it('click on Sign in', function () {
        addAddresspagedetails.clickonSignSubmitbutton();
    });
    it('click on Hellobtn', function () {
        addAddresspagedetails.clickonHellobutton();
    });
    it('click on Add address', function () {
        addAddresspagedetails.clickonAddAddressImage();
    });
    it('click on Add address Plus Image', function () {
        addAddresspagedetails.clickonAddAddressPlusimage();
    });
    it('Select country Name', function () {
        addAddresspagedetails.selectcountryname(jsd.CustomerData1.country);
    });
    it('Enter Full Name', function () {
        addAddresspagedetails.enterFullNameAddress(jsd.CustomerData1.fullname);
    });
    it('Enter Address line1', function () {
        addAddresspagedetails.enterAddressline1textbox(jsd.CustomerData1.addressline1);
    });
    it('Enter Address line2', function () {
        addAddresspagedetails.enterAddressline2textbox(jsd.CustomerData1.addressline2);
    });
    it('Enter City', function () {
        addAddresspagedetails.enterCitytextbox(jsd.CustomerData1.city);
    });
    it('Enter State', function () {
        addAddresspagedetails.enterStatetextbox(jsd.CustomerData1.state);
    });
    it('Enter ZipCode', function () {
        addAddresspagedetails.enterZipcodetextbox(jsd.CustomerData1.zipcode);
    });
    it('Enter Phonenumber', function () {
        addAddresspagedetails.enterPhonenumbertextbox(jsd.customerData1.phonenumber);
    });
    it('Click on Add address button', function () {
        addAddresspagedetails.clickonAddAddressbutton();
    });
    it('Click on Signout Amazon', function () {
        addAddresspagedetails.logoutamazon();
    });
});
//# sourceMappingURL=AddAddressTC.js.map