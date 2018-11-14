"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('launch xyz bank', function () {
    it('should launch xyz bank home page', function () {
        protractor_1.browser.get("http://way2automation.com/angularjs-protractor/banking/#/login");
        protractor_1.browser.sleep(3000);
        var text = protractor_1.element(protractor_1.by.className('mainHeading'));
        // var text1:number=element();
        expect(text.getText()).toBe('XYZ Bank');
    });
});
//# sourceMappingURL=testlaunch.js.map