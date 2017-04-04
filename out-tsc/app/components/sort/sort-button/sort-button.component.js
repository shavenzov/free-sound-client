/**
 *
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, Component, EventEmitter } from '@angular/core';
export var SortButtonComponent = (function () {
    function SortButtonComponent() {
        this.onClick = new EventEmitter();
    }
    Object.defineProperty(SortButtonComponent.prototype, "isSelectedInSortField", {
        get: function () {
            return (this.selected == this.sortField.descSort) || (this.selected == this.sortField.ascSort);
        },
        enumerable: true,
        configurable: true
    });
    SortButtonComponent.prototype.clickHandler = function () {
        if (this.isSelectedInSortField && this.sortField.descSort) {
            this.selected = (this.selected == this.sortField.descSort) ? this.sortField.ascSort : this.sortField.descSort;
            this.onClick.emit(this.selected);
            return;
        }
        this.onClick.emit(this.sortField.ascSort);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SortButtonComponent.prototype, "sortField", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SortButtonComponent.prototype, "selected", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], SortButtonComponent.prototype, "onClick", void 0);
    SortButtonComponent = __decorate([
        Component({
            selector: 'sort-button',
            templateUrl: './sort-button.component.html',
            styleUrls: ['./sort-button.component.less']
        }), 
        __metadata('design:paramtypes', [])
    ], SortButtonComponent);
    return SortButtonComponent;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sort/sort-button/sort-button.component.js.map