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
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FreeSoundService } from "../../services/free-sound.service";
export var AuthComponent = (function () {
    function AuthComponent(route, router, freeSoundService) {
        this.route = route;
        this.router = router;
        this.freeSoundService = freeSoundService;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { _this.onParamsLoaded(params); });
    };
    AuthComponent.prototype.onParamsLoaded = function (params) {
        var _this = this;
        if (params.code) {
            this.freeSoundService.auth(params.code).subscribe(function (token) { _this.onAuth(token, params); }, function (error) { _this.onError(error, params); });
            return;
        }
        if (params.error) {
            this.navigateToError(params.error, this.getReturnState(params));
            return;
        }
        this.navigateToError('unknown error', this.getReturnState(params));
    };
    AuthComponent.prototype.getReturnState = function (params) {
        return params.state ? params.state : '';
    };
    AuthComponent.prototype.onAuth = function (token, params) {
        this.router.navigate([this.getReturnState(params)]);
    };
    AuthComponent.prototype.onError = function (error, params) {
        this.navigateToError(error.json().error, this.getReturnState(params));
    };
    AuthComponent.prototype.navigateToError = function (error, returnState) {
        var queryParams = { error: error, state: returnState };
        this.router.navigate(['auth-error'], { queryParams: queryParams });
    };
    AuthComponent = __decorate([
        Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.less']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ActivatedRoute !== 'undefined' && ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof Router !== 'undefined' && Router) === 'function' && _b) || Object, FreeSoundService])
    ], AuthComponent);
    return AuthComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/auth/auth.component.js.map