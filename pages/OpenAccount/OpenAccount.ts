import { browser, by, element, $ } from 'protractor';
import { Actions } from '../../Action/Action';

export class OpenAccount extends Actions {
    bankmanagerloginbtn: string;
    openaccountbtn: string;
    customer: string;
    customerOption: string;
    currency: string;
    currencyOption: string;
    processbtn: string;

    constructor(name){
        super();
        this.bankmanagerloginbtn = 'button[ng-click="manager()"]';
        this.openaccountbtn = 'button[ng-click="openAccount()"]';
        this.customer = 'select[ng-model="custId"]';
        this.customerOption = 'option[ng-repeat="cust in Customers"]';
        this.currency = 'select[ng-model="currency"]';
        this.currencyOption = 'select[ng-model="currency"]>option';
        this.processbtn = 'button[type="submit"]';
        
    }

    public clickonBankManagerLoginButton() {
        const btnlogin = this.bankmanagerloginbtn;
        if ($(btnlogin).isDisplayed()) {
            this.myCssClick(btnlogin, "login");
        } else {
            console.log("something wrong with clicking manager login");
        }
    }

    public clickOpenAccountButton() {
        const btn = this.openaccountbtn;
        if ($(btn).isDisplayed()) {
            this.myCssClick(btn, "Open Account Button Clicking");
        } else {
            console.log("something wrong with clicking open account button");
        }
    }

    public clickCustomerDropDown() {
        const drpdwn = this.customer;
        this.dropDownCss(drpdwn,"customer dropdown");
        console.log("click customer dropdown: " + drpdwn);
    }
    
    public selectCustomer(name) {
        const option = this.customerOption;
        console.log(option);
        this.selectByValueCss(option, name, 'asdfasdfasdf')
        //this.selectByValueCss(option, "select customer " + name);

    }

    public clickCurrencyDropDown() {
        const drpdwn = this.currency;
        this.dropDownCss(drpdwn, "currency dropdown")
    }

    public selectCurrency(name) {
        const option = this.currencyOption;
        console.log(option);
        this.selectByValueCss(option, name, "oooooo");
    }
    public clickProcessButton() {
        const btn = this.processbtn;
        this.myCssClick(btn, "processing button");
    }
    
}