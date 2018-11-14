import { browser, element, by } from 'protractor';

describe('launch xyz bank', function() {
    it('should launch xyz bank home page', ()=>{
        browser.get("http://way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(3000);
        var text:any=element(by.className('mainHeading'));
        // var text1:number=element();

        expect(text.getText()).toBe('XYZ Bank');
    })
});