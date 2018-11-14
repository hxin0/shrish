import { browser, element, by, ExpectedConditions, $ } from "protractor";
// import { DataProvider } from '../dataprovider/dataprovider';
import {async} from 'q';
let using = require('jasmine-data-provider');

let testDataJSON = require('../data/testData');


let bankmanagerloginbtn='button[ng-click="manager()"]';
let addcustomerbtn='button[ng-click="addCust()"]';

using(testDataJSON, async function (data){
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
            var elcss:any=$(bankmanagerloginbtn);
            // var elxpath:any=element(by.xpath('//button[@ng-click="manager()"]'));
            try {
                if (elcss.isDisplayed()) {
                    await elcss.click().then(null, function(err){
                        console.log("asdfasdfasdfasdf");
                    })
                } else {
                    console.log("element not displayed");
                }
            } catch (error) {
                console.log("click Bank Manager Login button error handling: " + error)
            }
    
        });
    
        // Click on Add Customer button
        it('Click on Add customer button', async()=>{
            try {
                await $(addcustomerbtn).click();
            } catch (error) {
                console.log("tryCatchBlockEror:" + error);
            }
        });
    
        // enter the first name
        it('enter the first name value', async()=>{
            // const frstName = element(by.)
            await $('input[ng-model="fName"]').sendKeys(data.firstname)
            .then(null, function(err){ console.log("qqq")})
        });
    
        it('enter the last name value', async()=>{
            await $('input[ng-model="lName"]').sendKeys(data.lastname);
        });
    
        it('enter the postal code value', async()=>{
            await element(by.css('input[ng-model="postCd"]')).sendKeys(data.postalcode);
        });
    
        it('enter submit button', async()=>{
            const submitButton = $('button[type="submit"]');
    
            if (await submitButton.isDisplayed()) {
                await submitButton.click();
            } else {
                console.log("Submit button is not displaying");
            }
            const alertDialog = browser.switchTo().alert();
            await expect(alertDialog.accept).toBeDefined();
            alertDialog.getText().then((text)=>{
                console.log("alert is displaying: " + text);
            })
            alertDialog.accept();
        });
    })
})
