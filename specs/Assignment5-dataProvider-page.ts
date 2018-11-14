import { browser, element, by, ExpectedConditions, $ } from "protractor";
import { DataProvider } from '../dataprovider/dataprovider';
import {async} from 'q';
import { AddCustomer } from '../pages/BankManagerTest/bankmanager';
let using = require('jasmine-data-provider');
let loc = new AddCustomer();

using(DataProvider.Common, async function (data){
    describe('BankManager Testing', ()=>{

        // Launch
        it('Launch and enter value in BankManager', async()=>{
            try {
                await browser.get(data.testUrl);
            } catch (error) {
                console.log(error);
            }
        });
    
        // Click on Bank Manager Login button
        it('Click on Bank Manager Login button', async()=>{
            try {
                await loc.clickonBankManagerLoginButton();
            } catch (error) {
                console.log("click Bank Manager Login button error handling: " + error)
            }   
        });
    
        // Click on Add Customer button
        it('Click on Add customer button', async()=>{
            try {
                await loc.clickonAddCustomerButton();
            } catch (error) {
                console.log("tryCatchBlockEror:" + error);
            }
        });
    
        // enter the first name
        it('enter value', async()=>{
            await loc.enterFirstName(data.firstname);
            await loc.enterLastName(data.lastname);
            await loc.enterPostalcode(data.postalcode);
        });
    
        it('enter submit button', async()=>{
            await loc.clickSubmit();
        });
    })
})
