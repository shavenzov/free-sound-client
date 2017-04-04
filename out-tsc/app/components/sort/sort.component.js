/**
 *
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
 *
 *
 * */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var SortComponent = (function () {
    function SortComponent() {
        this.sortChanged = new EventEmitter();
    }
    SortComponent.prototype.calculatePrevSortField = function () {
        this.prevSelectedField = this.selectedField;
        for (var _i = 0, _a = this.sortFields; _i < _a.length; _i++) {
            var sortField = _a[_i];
            if ((sortField.ascSort == this.selectedField) || (sortField.descSort == this.selectedField)) {
                this.prevSortField = sortField;
                return;
            }
        }
    };
    SortComponent.prototype.ngOnInit = function () {
        this.calculatePrevSortField();
    };
    SortComponent.prototype.sortButtonClick = function (sortField, selectedField) {
        //Changed sort param
        if (sortField.descSort && (this.prevSortField != sortField)) {
            //Calculating sort order for new params
            selectedField = (this.prevSortField.descSort == this.prevSelectedField) ? sortField.descSort : sortField.ascSort;
        }
        if (this.selectedField != selectedField) {
            this.selectedField = selectedField;
            this.sortChanged.emit(selectedField);
            if (sortField.descSort) {
                this.prevSortField = sortField;
                this.prevSelectedField = selectedField;
            }
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], SortComponent.prototype, "sortFields", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SortComponent.prototype, "selectedField", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], SortComponent.prototype, "sortChanged", void 0);
    SortComponent = __decorate([
        Component({
            selector: 'sort',
            templateUrl: './sort.component.html',
            styleUrls: ['./sort.component.less']
        }), 
        __metadata('design:paramtypes', [])
    ], SortComponent);
    return SortComponent;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sort/sort.component.js.map