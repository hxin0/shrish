import { browser, element, by, ExpectedConditions, $, $$ } from "protractor";
// import { DataProvider } from '../dataprovider/dataprovider';
import {async} from 'q';
import { OpenAccount } from '../pages/OpenAccount/OpenAccount';
import { AddCustomer } from "../pages/addCustomer";
let using = require('jasmine-data-provider');

let testDataJSON = require('../data/testData');

let customerdetails = new AddCustomer();
let openaccountdetails = new OpenAccount(testDataJSON.customerData1.firstname + " " + testDataJSON.customerData1.lastname);

//using(testDataJSON, async function (data){
    describe('BankManager Testing', ()=>{

        // var openaccountdetails = new OpenAccount(data.firstname + " " + data.lastname);
        // Launch
        it('Launch and enter value in BankManager', async()=>{
            try {
                await browser.get(testDataJSON.customerData1.testUrl);
            } catch (error) {
                console.log(error);
            }
        });
    
        // Click on Bank Manager Login button
        it('Click on Bank Manager Login button', async()=>{
            await openaccountdetails.clickonBankManagerLoginButton();    
        });
    
        // Click on Add Customer button
        it('Click on Add customer button', async()=>{
            try {
                await customerdetails.clickAddCustomerButton();
            } catch (error) {
                console.log("tryCatchBlockEror:" + error);
            }
        });
    
        // enter the first name
        it('enter the first name value', async()=>{
            customerdetails.enterFirstName(testDataJSON.customerData1.firstname);
            // const frstName = element(by.)
            // await $('input[ng-model="fName"]').sendKeys(testDataJSON.customerData1.firstname)
            // .then(null, function(err){ console.log("qqq")})
        });
    
        it('enter the last name value', async()=>{
            //await $('input[ng-model="lName"]').sendKeys(testDataJSON.customerData1.lastname);
            customerdetails.enterLastName(testDataJSON.customerData1.lastname);
        });
    
        it('enter the postal code value', async()=>{
            //await element(by.css('input[ng-model="postCd"]')).sendKeys(testDataJSON.customerData1.postalcode);
            customerdetails.enterPostcode(testDataJSON.customerData1.postalcode);
        });
    
        it('enter submit button', async()=>{
            customerdetails.submitAddCustomer();
        });

        it('click open account button', async()=>{
            console.log("BBB");
            openaccountdetails.clickOpenAccountButton();
        });

        it("click customer dropdown and select", async()=>{
            openaccountdetails.clickCustomerDropDown();
            // debugger;
            let customerOption = 'option[ng-repeat="cust in Customers"]';
            let customerOption1 = customerOption + ':nth-child(2)';
            let tttt = await $(customerOption1).getText();
            let tttt0 = await $$(customerOption).getText();
            let length = await $$(customerOption).getSize();
            let length1 = await $$(customerOption).getTagName();
            let t2 = tttt0[2];
            let t3 = tttt0[3];
            let lll = tttt0.length;
            //debugger;
            openaccountdetails.selectCustomer(testDataJSON.customerData1.firstname + " " + testDataJSON.customerData1.lastname);
        });

        it("click currency dropdown and select", async()=>{
            openaccountdetails.clickCurrencyDropDown();
            openaccountdetails.selectCurrency(testDataJSON.customerData1.currency);           
        });

        it("Click process button", async()=>{
            openaccountdetails.clickProcessButton();
        })
    })
//})
