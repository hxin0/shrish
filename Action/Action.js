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
var Actions = /** @class */ (function () {
    function Actions() {
    }
    Actions.prototype.myClick = function (locator, logname) {
        var ele = protractor_1.element(protractor_1.by.xpath(locator));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(ele), 2000).then(function () {
            ele.click().then(function () {
                console.log("Clicking " + logname);
            }, function (err) {
                console.log("Issue while Clicking" + logname);
            });
        }, function (err) {
            console.log("Issue while finding" + logname);
        });
    };
    Actions.prototype.myCssClick = function (locator, logname) {
        var ele = protractor_1.$(locator);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(ele), 2000).then(function () {
            ele.click().then(function () {
                console.log("Clicking " + logname);
            }, function (err) {
                console.log("Issue while Clicking" + logname);
            });
        }, function (err) {
            console.log("Issue while finding" + logname);
        });
    };
    Actions.prototype.sendKey = function (locator, logname, keys) {
        var name = protractor_1.element(protractor_1.by.model(locator));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(name), 5000).then(function () {
            name.sendKeys(keys).then(function () {
                console.log("search for text box: " + logname);
            }, function (err) {
                console.log("issue in sending keys: " + logname);
            });
        }, function (err) {
            console.log("Issue in senKeys path: " + locator);
        });
    };
    Actions.prototype.dropDown = function (locator, logname) {
        var ele = protractor_1.element(protractor_1.by.xpath(locator));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(ele), 2000).then(function () {
            ele.click().then(function () {
                console.log("clicked " + logname);
            }, function (err) {
                console.log("Issue while clicking" + logname);
            });
        }, function () {
            console.log("Issue while finding" + logname);
        });
    };
    Actions.prototype.dropDownCss = function (locator, logname) {
        var ele = protractor_1.$(locator);
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(ele), 2000).then(function () {
            ele.click().then(function () {
                console.log("clicked " + logname);
            }, function (err) {
                console.log("Issue while clicking" + logname);
            });
        }, function () {
            console.log("Issue while finding" + logname);
        });
    };
    Actions.prototype.validateText = function (locator, logname, keys1) {
        var ele = protractor_1.element(protractor_1.by.xpath(locator));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(ele), 2000).then(function () {
            ele.getText().then(function (text) {
                console.log("Verifying " + text);
                expect(text).toEqual(keys1);
            }, function (err) {
                console.log("Issue while verifying " + logname);
            });
        }, function (err) {
            console.log("Issue while Text to be Valid" + locator);
        });
    };
    Actions.prototype.mySendKeys = function (locator, firstName, keys) {
        var ele = protractor_1.element(protractor_1.by.xpath(locator));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(ele), 2000).then(function () {
            ele.sendKeys(keys).then(function () {
                console.log("Entered Text in " + firstName);
            }, function (err) {
                console.log("Issue while sending Keys at " + firstName);
            });
        }, function (err) {
            console.log("Issue while presence of locator " + locator);
        });
    };
    Actions.prototype.GetText = function (locator, logname) {
        protractor_1.element(protractor_1.by.xpath(locator)).getText().then(function (text) {
            console.log(text);
        });
    };
    Actions.prototype.mouseHoverClick = function (mousePoint, locator) {
        var eleme = protractor_1.element(protractor_1.by.xpath(mousePoint));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(eleme), 2000).then(function () {
            protractor_1.browser.actions().mouseMove(eleme).click().perform().then(function () {
                console.log("Click Mouse " + locator);
            }, function (err) {
                console.log("Issue while clicking" + locator);
            });
        }, function (err) {
            console.log("issue while click " + mousePoint);
        });
    };
    // Dropdown
    Actions.prototype.selectByValue = function (optionElements, name, logName) {
        var dropDownXpath = protractor_1.element.all(protractor_1.by.xpath(optionElements));
        var size = dropDownXpath.count();
        for (var index = 1; index <= size; index++) {
            var optionElement = protractor_1.element(protractor_1.by.xpath(optionElements + "[" + index + "]"));
            var text = optionElement.getAttribute("value");
            if (text.trim() === name.trim()) {
                optionElement.click();
                break;
            }
        }
    };
    Actions.prototype.selectByValueCss = function (optionElements, name, logName) {
        return __awaiter(this, void 0, void 0, function () {
            var nameArray, size, index, optionElement, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.$$(optionElements).getText()];
                    case 1:
                        nameArray = _a.sent();
                        console.log(optionElements);
                        console.log("dropDownCss: " + nameArray + "@@@@==== ");
                        size = nameArray.length;
                        debugger;
                        index = 2;
                        _a.label = 2;
                    case 2:
                        if (!(index <= size + 2)) return [3 /*break*/, 5];
                        optionElement = protractor_1.$(optionElements + ":nth-child(" + index.toString() + ")");
                        console.log(optionElements + ":nth-child(" + index + ")");
                        return [4 /*yield*/, protractor_1.$(optionElements + ":nth-child(" + index.toString() + ")").getText()];
                    case 3:
                        text = _a.sent();
                        //console.log(text);
                        debugger;
                        if (text === name) {
                            optionElement.click();
                            return [3 /*break*/, 5];
                        }
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Actions;
}());
exports.Actions = Actions;
//# sourceMappingURL=Action.js.map