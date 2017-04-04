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
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FreeSoundUtilsService } from "../../services/free-sound-utils.service";
export var MainPageComponent = (function () {
    function MainPageComponent(route, freeSoundUtils, cdr) {
        this.route = route;
        this.freeSoundUtils = freeSoundUtils;
        this.cdr = cdr;
        this.msgs = [];
        this.searchResult = null;
        this.pending = false;
        this.pFirst = 1;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rowsPerPageOptions = this.freeSoundUtils.getRowsPerPageOptions();
        this.route.params.subscribe(function (params) { _this.applySearchParams(params); });
        this.route.data.subscribe(function (data) { _this.startLoading(data.loadingInfo); });
    };
    MainPageComponent.prototype.applySearchParams = function (params) {
        this.searchParams = this.freeSoundUtils.mergeWithDefault(params);
    };
    MainPageComponent.prototype.startLoading = function (resolverResult) {
        var _this = this;
        if (!resolverResult) {
            return;
        }
        this.searchResult = null;
        this.pending = true;
        resolverResult.data.subscribe(function (result) { _this.onLoaded(result); }, function (error) { _this.onError(error); });
    };
    MainPageComponent.prototype.onLoaded = function (result) {
        this.searchResult = result;
        this.sounds = result.results;
        this.pFirst = Math.min(this.searchParams.page * this.searchParams.pageSize, result.count) - 1;
        this.pending = false;
    };
    MainPageComponent.prototype.onError = function (error) {
        this.pending = false;
        this.showErrorMessage(error.json().detail);
    };
    MainPageComponent.prototype.showErrorMessage = function (message) {
        this.msgs = [{ severity: 'error', summary: 'Error', detail: message }];
    };
    MainPageComponent.prototype.onQueryChanged = function (params) {
        params.page = 1;
        this.freeSoundUtils.navigate(params);
    };
    MainPageComponent.prototype.onSortChanged = function (params) {
        params.page = 1;
        this.freeSoundUtils.navigate(params);
    };
    MainPageComponent.prototype.onTagClick = function (tag) {
        this.searchParams.query = tag;
        this.searchParams.page = 1;
        this.freeSoundUtils.navigate(this.searchParams);
        this.cdr.detectChanges();
    };
    MainPageComponent.prototype.paginate = function (event) {
        this.searchParams.page = event.page + 1;
        this.searchParams.pageSize = event.rows;
        this.freeSoundUtils.navigate(this.searchParams);
    };
    MainPageComponent = __decorate([
        Component({
            selector: 'main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.less']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ActivatedRoute !== 'undefined' && ActivatedRoute) === 'function' && _a) || Object, FreeSoundUtilsService, (typeof (_b = typeof ChangeDetectorRef !== 'undefined' && ChangeDetectorRef) === 'function' && _b) || Object])
    ], MainPageComponent);
    return MainPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/main-page/main-page.component.js.map