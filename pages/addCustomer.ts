import { browser, by, element } from "protractor";
import {Actions} from '../Action/Actions';

export class AddCustomer extends Actions {
    clickAddCustomer:string;
    firstName:string;
    lastName:string;
    postcode:string;
    addCustomer:string;
    constructor() {
        super();
        this.clickAddCustomer = "//button[@ng-click='addCust()']";
        this.firstName = "//input[@ng-model='fName']";
        this.lastName = "//input[@ng-model='lName']";
        this.postcode = "//input[@ng-model='postCd']";
        this.addCustomer = "//button[@type='submit']";
    }

    public clickAddCustomerButton() {
        this.myClick(this.clickAddCustomer, "Click on Add Customer button");
    }

    public enterFirstName(keys) {
        this.mySendKeys(this.firstName, "Enter first name", keys);
    }

    public enterLastName(keys) {
        this.mySendKeys(this.lastName, "Enter last name", keys);
    }

    public enterPostcode(keys) {
        this.mySendKeys(this.postcode, "Enter postcode", keys);
    }

    public submitAddCustomer() {       
        this.myClick(this.addCustomer, "Submit");
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then((text)=>{
            console.log("alert is displaying: " + text);
        })
        alertDialog.accept();
    }
}

