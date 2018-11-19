import { browser, element, by, ExpectedConditions, $ } from "protractor";
import {async} from 'q';
import { OpenAccount } from '../pages/OpenAccount/OpenAccount';
import { AddCustomer } from "../pages/addCustomer";
let using = require('jasmine-data-provider');

let testDataJSON = require('../data/testData');

let customerdetails = new AddCustomer();
let openaccountdetails = new OpenAccount(testDataJSON.customerData1.firstname + " " + testDataJSON.customerData1.lastname);

using(testDataJSON, async function (data){
    describe('BankManager Testing - create customer', ()=>{

        beforeAll(async()=>{
            try {
                await browser.get(data.testUrl);
            } catch (error) {
                console.log(error);
            }
            await openaccountdetails.clickonBankManagerLoginButton();   
        });
    
        // Click on Bank Manager Login button
    
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
            customerdetails.enterFirstName(data.firstname);
        });
    
        it('enter the last name value', async()=>{
            customerdetails.enterLastName(data.lastname);
        });
    
        it('enter the postal code value', async()=>{
            customerdetails.enterPostcode(data.postalcode);
        });
    
        it('enter submit button', async()=>{
            customerdetails.submitAddCustomer();
        });
    })
})

using(testDataJSON, async function (data){
    describe('BankManager Testing - open account', ()=>{

        it('click open account button', async()=>{
            openaccountdetails.clickOpenAccountButton();
        });

        it("click customer dropdown and select", async()=>{
            openaccountdetails.clickCustomerDropDown();
            openaccountdetails.selectCustomer(data.firstname + " " + data.lastname);
        });

        it("click currency dropdown and select", async()=>{
            openaccountdetails.clickCurrencyDropDown();
            openaccountdetails.selectCurrency(data.currency);           
        });

        it("Click process button", async()=>{
            openaccountdetails.clickProcessButton();
        });
    })
})