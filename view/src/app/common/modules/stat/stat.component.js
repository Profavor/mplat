"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatComponent = (function () {
    function StatComponent() {
        this.event = new core_1.EventEmitter();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    core_1.Input()
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    core_1.Input()
], StatComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input()
], StatComponent.prototype, "count", void 0);
__decorate([
    core_1.Input()
], StatComponent.prototype, "label", void 0);
__decorate([
    core_1.Input()
], StatComponent.prototype, "data", void 0);
__decorate([
    core_1.Output()
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    core_1.Component({
        selector: 'app-stat',
        templateUrl: './stat.component.html',
        styleUrls: ['./stat.component.scss']
    })
], StatComponent);
exports.StatComponent = StatComponent;
