import { browser, by, element, $ } from 'protractor';

export class AddCustomer {
    bankmanagerloginbtn: string;
    addcustomerbtn: string;
    firstName: string;
    lastName: string;
    postcode: string;
    generateCustomerID: string;

    constructor() {
        this.bankmanagerloginbtn='button[ng-click="manager()"]';
        this.addcustomerbtn='button[ng-click="addCust()"]';
        this.firstName='input[ng-model="fName"]';
        this.lastName='input[ng-model="lName"]';
        this.postcode='input[ng-model="postCd"]';
        this.generateCustomerID='button[type="submit"]';
    }

    public clickonBankManagerLoginButton() {
        var elcss:any=$(this.bankmanagerloginbtn);
        if (elcss.isDisplayed()) {
            elcss.click().then(null, function(err){
                console.log("asdfasdfasdfasdf");
            })
        } else {
            console.log("element not displayed");
        }
    }

    public clickonAddCustomerButton() {
        $(this.addcustomerbtn).click();
    }

    public enterFirstName(param) {
        $(this.firstName).sendKeys(param)
    }

    public enterLastName(param) {
        $(this.lastName).sendKeys(param)
    }

    public enterPostalcode(param) {
        $(this.postcode).sendKeys(param)
    }

    public clickSubmit() {
        const submitButton = $(this.generateCustomerID);
    
        if (submitButton.isDisplayed()) {
            submitButton.click();
        } else {
            console.log("Submit button is not displaying");
        }
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then((text)=>{
            console.log("alert is displaying: " + text);
        })
        alertDialog.accept();
    }
}