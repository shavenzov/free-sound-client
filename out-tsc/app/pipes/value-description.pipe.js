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
import { Pipe } from '@angular/core';
export var ValueDescriptionPipe = (function () {
    function ValueDescriptionPipe() {
    }
    ValueDescriptionPipe.prototype.transform = function (description) {
        return description.formater ? description.formater.transform(description.value) : description.value;
    };
    ValueDescriptionPipe = __decorate([
        Pipe({
            name: 'valueDescription'
        }), 
        __metadata('design:paramtypes', [])
    ], ValueDescriptionPipe);
    return ValueDescriptionPipe;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/pipes/value-description.pipe.js.map