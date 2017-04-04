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
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from "../../services/audio.service";
export var PlayerComponent = (function () {
    function PlayerComponent(audioService) {
        this.audioService = audioService;
        this.hovered = false;
        this.waveFormViewMode = true;
        this.msgs = [];
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initState();
        this.audioService.subscribe(function (event) { return _this.onPlayerEvent(event); });
    };
    PlayerComponent.prototype.onPlayerEvent = function (event) {
        if (this.audioService.isSoundCurrent(this.sound)) {
            switch (event.relatedEvent.type) {
                case 'waiting': {
                    this.onWaiting(event);
                    break;
                }
                case 'progress': {
                    this.onProgress(event);
                    break;
                }
                case 'timeupdate': {
                    this.onTimeUpdate(event);
                    break;
                }
                case 'ended': {
                    this.onEnded(event);
                    break;
                }
                case 'error': {
                    this.onError(event);
                    break;
                }
                case 'pause': {
                    this.onPause(event);
                    break;
                }
                case 'play': {
                    this.onPlay(event);
                    break;
                }
                case 'soundChanged': {
                    this.resetState();
                    break;
                }
            }
        }
    };
    PlayerComponent.prototype.onPlay = function (event) {
        this.playing = true;
        this.active = true;
    };
    PlayerComponent.prototype.onWaiting = function (event) {
        this.waiting = true;
    };
    PlayerComponent.prototype.onProgress = function (event) {
        if (this.msgs.length > 0) {
            return;
        }
        this.buffering = this.audioService.buffering;
        this.waiting = false;
        if (this.buffering) {
            this.loadingChunks = this.populateVisualLoading(event.player.buffered);
        }
    };
    PlayerComponent.prototype.onTimeUpdate = function (event) {
        if (this.msgs.length > 0) {
            return;
        }
        this.position = event.player.currentTime;
        this.cursorPos = this.audioPositionToPosition(event.player.currentTime);
    };
    PlayerComponent.prototype.onPause = function (event) {
        this.playing = false;
    };
    PlayerComponent.prototype.onEnded = function (event) {
        this.playing = false;
        this.waiting = false;
        this.position = this.sound.duration;
    };
    PlayerComponent.prototype.onError = function (event) {
        this.msgs.push({ severity: 'error', summary: 'Error occured while trying to play sound', detail: '...' });
        this.resetState();
    };
    PlayerComponent.prototype.initState = function () {
        if (this.audioService.isSoundCurrent(this.sound)) {
            this.active = true;
            this.audioService.onReatach();
            return;
        }
        this.resetState();
    };
    PlayerComponent.prototype.resetState = function () {
        this.position = this.sound.duration;
        this.active = false;
        this.playing = false;
        this.waiting = false;
        this.buffering = false;
        this.loadingChunks = [];
        this.cursorPos = 0;
    };
    PlayerComponent.prototype.switchToWaveViewButtonClick = function () {
        this.waveFormViewMode = true;
    };
    PlayerComponent.prototype.switchToSpectralViewButtonClick = function () {
        this.waveFormViewMode = false;
    };
    PlayerComponent.prototype.onMouseOver = function () {
        this.hovered = true;
    };
    PlayerComponent.prototype.onMouseOut = function () {
        this.hovered = false;
    };
    PlayerComponent.prototype.onPlayClick = function () {
        this.audioService.play(this.sound);
    };
    PlayerComponent.prototype.onPlayerClick = function (event) {
        if ((event.target == this.panelContainer.nativeElement) || (event.target == this.topPanel.nativeElement) || (event.target == this.bottomPanel.nativeElement)) {
            if (this.audioService.isSoundCurrent(this.sound)) {
                if (this.audioService.playing) {
                    this.audioService.player.currentTime = this.positionToAudioPosition(event.offsetX);
                    return;
                }
            }
            this.audioService.play(this.sound);
        }
    };
    PlayerComponent.prototype.onPauseClick = function () {
        this.audioService.pause();
    };
    PlayerComponent.prototype.audioPositionToPosition = function (position) {
        var componentWidth = this.panelContainer.nativeElement.clientWidth;
        var duration = this.audioService.player.duration;
        return Math.floor((position * componentWidth) / duration);
    };
    PlayerComponent.prototype.positionToAudioPosition = function (position) {
        var componentWidth = this.panelContainer.nativeElement.clientWidth;
        var duration = this.audioService.player.duration;
        return (position * duration) / componentWidth;
    };
    PlayerComponent.prototype.populateVisualLoading = function (buffered) {
        var chunks = [];
        if (buffered.length > 0) {
            for (var i = 0; i < buffered.length; i++) {
                var start = this.audioPositionToPosition(buffered.start(i));
                var end = this.audioPositionToPosition(buffered.end(i));
                var width = end - start;
                chunks.push({ start: start, width: width });
            }
        }
        return chunks;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], PlayerComponent.prototype, "sound", void 0);
    __decorate([
        ViewChild('panelContainer'), 
        __metadata('design:type', (typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object)
    ], PlayerComponent.prototype, "panelContainer", void 0);
    __decorate([
        ViewChild('topPanel'), 
        __metadata('design:type', (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object)
    ], PlayerComponent.prototype, "topPanel", void 0);
    __decorate([
        ViewChild('bottomPanel'), 
        __metadata('design:type', (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object)
    ], PlayerComponent.prototype, "bottomPanel", void 0);
    PlayerComponent = __decorate([
        Component({
            selector: 'player',
            templateUrl: './player.component.html',
            styleUrls: ['./player.component.less']
        }), 
        __metadata('design:paramtypes', [AudioService])
    ], PlayerComponent);
    return PlayerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/player/player.component.js.map