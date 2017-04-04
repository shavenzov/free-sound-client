/**
 * This code has been written by Denis Shavenzov
 * If you have any questions you can contact me by email shavenzov@gmail.com
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
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AudioService } from './services/audio.service';
export var AppComponent = (function () {
    function AppComponent(audioService) {
        this.audioService = audioService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.audioService.setPlayer(this.player);
    };
    __decorate([
        ViewChild('player'), 
        __metadata('design:type', (typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object)
    ], AppComponent.prototype, "player", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less']
        }), 
        __metadata('design:paramtypes', [AudioService])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/app.component.js.map