/**
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
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
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import 'rxjs/add/observable/fromEvent';
import { sortFields } from '../../constants';
export var SearchPanelComponent = (function () {
    function SearchPanelComponent() {
        /**
         * Delay in ms before searchParamsChanged
         * @type {number}
         */
        this.delayTime = 500;
        /**
         * Minimal query text length
         * @type {number}
         */
        this.minQueryLength = 3;
        this.pending = false;
        this.queryChanged = new EventEmitter();
        this.sortChanged = new EventEmitter();
        this.sortFields = sortFields.slice();
    }
    SearchPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable.fromEvent(this.searchInput.nativeElement, 'input')
            .debounceTime(this.delayTime)
            .map(function (event) { return event.target.value.trim(); })
            .filter(function (query) { return query && (query.length >= _this.minQueryLength); })
            .subscribe(function (query) { _this.onFilterNext(query); });
    };
    SearchPanelComponent.prototype.onFilterNext = function (query) {
        if (this.searchParams) {
            this.searchParams.query = query;
            this.queryChanged.emit(this.searchParams);
        }
    };
    SearchPanelComponent.prototype.onSortChanged = function (sort) {
        if (this.searchParams) {
            this.searchParams.sort = sort;
            this.sortChanged.emit(this.searchParams);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], SearchPanelComponent.prototype, "delayTime", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], SearchPanelComponent.prototype, "minQueryLength", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SearchPanelComponent.prototype, "searchResult", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], SearchPanelComponent.prototype, "pending", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SearchPanelComponent.prototype, "searchParams", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_a = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _a) || Object)
    ], SearchPanelComponent.prototype, "queryChanged", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', (typeof (_b = typeof EventEmitter !== 'undefined' && EventEmitter) === 'function' && _b) || Object)
    ], SearchPanelComponent.prototype, "sortChanged", void 0);
    __decorate([
        ViewChild('searchInput'), 
        __metadata('design:type', (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object)
    ], SearchPanelComponent.prototype, "searchInput", void 0);
    SearchPanelComponent = __decorate([
        Component({
            selector: 'search-panel',
            templateUrl: './search-panel.component.html',
            styleUrls: ['./search-panel.component.less']
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPanelComponent);
    return SearchPanelComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/search-panel/search-panel.component.js.map