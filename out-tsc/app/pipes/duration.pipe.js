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
import { isNullOrUndefined } from "util";
export var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        if (isNullOrUndefined(value)) {
            return 'N/A';
        }
        var seconds = value;
        var hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        var milliseconds = Math.round((seconds - Math.floor(seconds)) * 1000);
        seconds = Math.floor(seconds);
        var hoursStr = hours.toString();
        var minutesStr = minutes.toString();
        var secondsStr = seconds.toString();
        var millisecondsStr = milliseconds.toString();
        if (hours < 10) {
            hoursStr = "0" + hoursStr;
        }
        if (minutes < 10) {
            minutesStr = "0" + minutesStr;
        }
        if (seconds < 10) {
            secondsStr = "0" + secondsStr;
        }
        if (milliseconds < 10) {
            millisecondsStr = "00" + millisecondsStr;
        }
        else if (milliseconds < 100) {
            millisecondsStr = "0" + millisecondsStr;
        }
        return minutesStr + ':' + secondsStr + ':' + millisecondsStr;
    };
    DurationPipe = __decorate([
        Pipe({
            name: 'duration'
        }), 
        __metadata('design:paramtypes', [])
    ], DurationPipe);
    return DurationPipe;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/pipes/duration.pipe.js.map