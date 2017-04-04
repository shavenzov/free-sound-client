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
import { ActivatedRoute } from "@angular/router";
import { FreeSoundService } from "../../services/free-sound.service";
export var AuthErrorComponent = (function () {
    function AuthErrorComponent(route, freeSoundService) {
        this.route = route;
        this.freeSoundService = freeSoundService;
    }
    AuthErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { _this.onParamsLoaded(params); });
    };
    AuthErrorComponent.prototype.onParamsLoaded = function (params) {
        if (params.error) {
            this.error = params.error;
        }
    };
    AuthErrorComponent.prototype.onTryAgainButtonClick = function () {
        this.freeSoundService.redirectToOAuthPage(this.route.snapshot.queryParams['state']);
    };
    AuthErrorComponent = __decorate([
        Component({
            selector: 'app-auth-error',
            templateUrl: './auth-error.component.html',
            styleUrls: ['./auth-error.component.less']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ActivatedRoute !== 'undefined' && ActivatedRoute) === 'function' && _a) || Object, FreeSoundService])
    ], AuthErrorComponent);
    return AuthErrorComponent;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/auth-error/auth-error.component.js.map