"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.num = 0;
        this.e = 0;
        this.dropDownValue = 0 - 5;
        this.f = 0;
    }
    AppComponent.prototype.SetDropDownValue = function (drpValue) {
        this.dropDownValue = drpValue.target.value;
    };
    AppComponent.prototype.EMI = function () {
        switch (this.dropDownValue) {
            case 0:
                this.e = this.num * 12 * ((1 + 12) ^ 1 / (((1 + 12) ^ 1) - 1));
                console.log(this.e);
                break;
            case 1:
                this.e = this.num * 10 * ((1 + 10) ^ 2 / (((1 + 10) ^ 2) - 1));
                console.log(this.e);
                break;
            case 2:
                this.e = this.num * 9 * ((1 + 9) ^ 3 / (((1 + 9) ^ 3) - 1));
                console.log(this.e);
                break;
            case 3:
                this.e = this.num * 8 * ((1 + 8) ^ 4 / (((1 + 8) ^ 4) - 1));
                console.log(this.e);
                break;
            case 4:
                this.e = this.num * 6 * ((1 + 6) ^ 5 / (((1 + 6) ^ 5) - 1));
                console.log(this.e);
                break;
            default:
                console.log("E: Select correct time");
        }
        var f = this.e;
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
