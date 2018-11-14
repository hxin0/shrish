"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var dataprovider_1 = require("../dataprovider/dataprovider");
var using = require('jasmine-data-provider');
using(dataprovider_1.DataProvider.Common, function (data) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            describe('BankManager Testing', function () {
                // Launch
                it('Launch and enter value in BankManager', function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, protractor_1.browser.get(data.testUrl)];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                console.log(error_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                // Click on Bank Manager Login button
                it('Click on Bank Manager Login button', function () { return __awaiter(_this, void 0, void 0, function () {
                    var elcss, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                elcss = protractor_1.element(protractor_1.by.css('button[ng-click="manager()"]'));
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 5, , 6]);
                                if (!elcss.isDisplayed()) return [3 /*break*/, 3];
                                return [4 /*yield*/, elcss.click().then(null, function (err) {
                                        console.log("asdfasdfasdfasdf");
                                    })];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log("element not displayed");
                                _a.label = 4;
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_2 = _a.sent();
                                console.log("click Bank Manager Login button error handling: " + error_2);
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
                // Click on Add Customer button
                it('Click on Add customer button', function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, protractor_1.element(protractor_1.by.css('button[ng-click="addCust()"]')).click()];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_3 = _a.sent();
                                console.log("tryCatchBlockEror:" + error_3);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                // enter the first name
                it('enter the first name value', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // const frstName = element(by.)
                            return [4 /*yield*/, protractor_1.$('input[ng-model="fName"]').sendKeys(data.firstname)
                                    .then(null, function (err) { console.log("qqq"); })];
                            case 1:
                                // const frstName = element(by.)
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('enter the last name value', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.$('input[ng-model="lName"]').sendKeys(data.lastname)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('enter the postal code value', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.css('input[ng-model="postCd"]')).sendKeys(data.postalcode)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('enter submit button', function () { return __awaiter(_this, void 0, void 0, function () {
                    var submitButton, alertDialog;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                submitButton = protractor_1.$('button[type="submit"]');
                                return [4 /*yield*/, submitButton.isDisplayed()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                return [4 /*yield*/, submitButton.click()];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log("Submit button is not displaying");
                                _a.label = 4;
                            case 4:
                                alertDialog = protractor_1.browser.switchTo().alert();
                                return [4 /*yield*/, expect(alertDialog.accept).toBeDefined()];
                            case 5:
                                _a.sent();
                                alertDialog.getText().then(function (text) {
                                    console.log("alert is displaying: " + text);
                                });
                                alertDialog.accept();
                                return [2 /*return*/];
                        }
                    });
                }); });
                // Read alert
                xit('Read Alerts', function () { return __awaiter(_this, void 0, void 0, function () {
                    var alertDialog;
                    return __generator(this, function (_a) {
                        alertDialog = protractor_1.browser.switchTo().alert();
                        // await expect(alertDialog.accept).toBeDefined();
                        alertDialog.getText().then(function (text) {
                            console.log("alert is displaying: " + text);
                        });
                        alertDialog.accept();
                        return [2 /*return*/];
                    });
                }); });
                xit('simply sleep', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                xit('try catch finally block', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        try {
                            throw new Error('oops');
                        }
                        catch (e) {
                            console.log(e);
                        }
                        finally {
                            console.log('finally block');
                        }
                        return [2 /*return*/];
                    });
                }); });
            });
            return [2 /*return*/];
        });
    });
});
//# sourceMappingURL=Assignment1-dataProvider.js.map