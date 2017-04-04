/**
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, RendererFactory2, ViewEncapsulation, EventEmitter } from '@angular/core';
export var AudioService = (function (_super) {
    __extends(AudioService, _super);
    function AudioService(rendererFactory) {
        _super.call(this);
        this.rendererFactory = rendererFactory;
        this._currentSound = null;
        this.pausedCurrentTime = -1;
    }
    Object.defineProperty(AudioService.prototype, "playing", {
        get: function () {
            return this._playing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "currentSound", {
        /**
         * Sound description of current playing sound
         * @returns {SoundInstance}
         */
        get: function () {
            return this._currentSound;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "buffering", {
        /**
         *
         * Sound is buffering right now or not
         * @returns {boolean}
         */
        get: function () {
            if (this.player.buffered.length > 0) {
                return this.player.buffered.end(this.player.buffered.length - 1) != this.player.duration;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "currentTime", {
        get: function () {
            return this._playing ? this.player.currentTime : this.pausedCurrentTime;
        },
        set: function (value) {
            if (this.currentTime != value) {
                this.player.currentTime = value;
                this.emit({ sound: this._currentSound, relatedEvent: { type: 'timeupdate' }, player: this.player });
            }
        },
        enumerable: true,
        configurable: true
    });
    AudioService.prototype.onReatach = function () {
        var _this = this;
        setTimeout(function () { _this.reatachTick(); }, 100);
    };
    AudioService.prototype.reatachTick = function () {
        if (this.playing) {
            this.emit({ sound: this._currentSound, relatedEvent: { type: 'play' }, player: this.player });
        }
        this.emit({ sound: this._currentSound, relatedEvent: { type: 'progress' }, player: this.player });
        this.emit({ sound: this._currentSound, relatedEvent: { type: 'timeupdate' }, player: this.player });
    };
    Object.defineProperty(AudioService.prototype, "player", {
        get: function () {
            return this._player.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    AudioService.prototype.setPlayer = function (player) {
        var _this = this;
        this._player = player;
        this.renderer = this.rendererFactory.createRenderer(this.player, { id: 'sound_player', encapsulation: ViewEncapsulation.None, styles: [], data: {} });
        this.renderer.listen(this.player, 'progress', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'waiting', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'timeupdate', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'ended', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'error', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'pause', function (event) { return _this.onPlayerEvent(event); });
        this.renderer.listen(this.player, 'play', function (event) { return _this.onPlayerEvent(event); });
    };
    AudioService.prototype.onPlayerEvent = function (event) {
        if ((event.type == 'ended') || (event.type == 'error') || (event.type == 'pause')) {
            this._playing = false;
            this.stopTimer();
        }
        if (event.type == 'play') {
            this.startTimer();
        }
        //Firefox doesn't send last progress event so we send progress event if player emit timeupdate event
        if (event.type == 'timeupdate') {
            this.emit({ sound: this._currentSound, relatedEvent: { type: 'progress' }, player: this.player });
        }
        this.emit({ sound: this._currentSound, relatedEvent: event, player: this.player });
        if (event.type == 'error') {
            this._currentSound = null;
        }
    };
    AudioService.prototype.play = function (sound) {
        var soundChanged = !this._currentSound || (sound.id != this._currentSound.id);
        if (soundChanged) {
            this.emit({ sound: this._currentSound, relatedEvent: { type: 'soundChanged' }, player: this.player });
            this.pausedCurrentTime = -1;
            this._currentSound = sound;
            this.renderer.setAttribute(this.player, 'src', sound.previews['preview-hq-mp3']);
        }
        if (this.pausedCurrentTime != -1) {
            this.player.currentTime = this.pausedCurrentTime;
        }
        this._playing = true;
        this.player.play();
    };
    AudioService.prototype.pause = function () {
        this.player.pause();
        this.pausedCurrentTime = this.player.currentTime;
    };
    /**
     * Sound param is current or not
     * @param sound
     * @returns {boolean}
     */
    AudioService.prototype.isSoundCurrent = function (sound) {
        return this._currentSound && (this._currentSound.id == sound.id);
    };
    AudioService.prototype.startTimer = function () {
        var _this = this;
        if (!this.timer) {
            this.timer = setInterval(function () { return _this.timerTick(); }, 100);
        }
    };
    AudioService.prototype.stopTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    AudioService.prototype.timerTick = function () {
        this.emit({ sound: this._currentSound, relatedEvent: { type: 'timeupdate' }, player: this.player });
    };
    AudioService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof RendererFactory2 !== 'undefined' && RendererFactory2) === 'function' && _a) || Object])
    ], AudioService);
    return AudioService;
    var _a;
}(EventEmitter));
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/services/audio.service.js.map