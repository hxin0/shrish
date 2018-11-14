import { browser, element, by, ExpectedConditions, $ } from "protractor";
import { DataProvider } from '../dataprovider/dataprovider';
import {async} from 'q';
import { Workbook, Worksheet, Row, Cell } from 'exceljs';
let data = require('../data/testData');

describe('excel', function() {
    browser.ignoreSynchronazation = true;
    xit('excel;', ()=>{
        browser.manage().timeouts().implicitlyWait(30000);
        var wb:Workbook = new Workbook();
        wb.xlsx.readFile("./test.xlsx").then(function(){
            let sheet:Worksheet = wb.getWorksheet("Sheets");
            let rowObj:Row=sheet.getRow(3);
        })
    })
})

describe('BankManager Testing with Excel', ()=>{

    // Launch
    it('Launch and enter value in BankManager', async()=>{
        try {
            await browser.get(data.customerData1.testUrl);
        } catch (error) {
            console.log(error);
        }
    });

    // Click on Bank Manager Login button
    it('Click on Bank Manager Login button', async()=>{
        var elcss:any=element(by.css('button[ng-click="manager()"]'));
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
            await element(by.css('button[ng-click="addCust()"]')).click();
        } catch (error) {
            console.log("tryCatchBlockEror:" + error);
        }
    });

    // enter the first name
    it('enter the first name value', async()=>{
        // const frstName = element(by.)
        await $('input[ng-model="fName"]').sendKeys(data.customerData1.firstname)
        .then(null, function(err){ console.log("qqq")})
    });

    it('enter the last name value', async()=>{
        await $('input[ng-model="lName"]').sendKeys(data.customerData1.lastname);
    });

    it('enter the postal code value', async()=>{
        await element(by.css('input[ng-model="postCd"]')).sendKeys(data.customerData1.postalcode);
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

    // Read alert
    xit('Read Alerts', async()=>{
        const alertDialog = browser.switchTo().alert();
        // await expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then((text)=>{
            console.log("alert is displaying: " + text);
        })
        alertDialog.accept();
    });

    xit('simply sleep', async()=>{
        await browser.sleep(5000);
    });

    xit('try catch finally block', async ()=>{
        try{
            throw new Error('oops');
        } catch(e) {
            console.log(e)
        } finally {
            console.log('finally block');
        }
    })
})

