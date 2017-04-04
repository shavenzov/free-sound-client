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
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { FileSizePipe } from "../../pipes/file-size.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";
import { FreeSoundUtilsService } from "../../services/free-sound-utils.service";
export var SoundItemComponent = (function () {
    function SoundItemComponent(freeSoundUtilsService) {
        this.freeSoundUtilsService = freeSoundUtilsService;
        this.onTagClick = new EventEmitter();
    }
    Object.defineProperty(SoundItemComponent.prototype, "sound", {
        get: function () {
            return this._sound;
        },
        set: function (value) {
            this._sound = value;
            this.createAudioDescription();
        },
        enumerable: true,
        configurable: true
    });
    SoundItemComponent.prototype.ngOnInit = function () {
        this.createDownloadItems();
    };
    SoundItemComponent.prototype.createDownloadItems = function () {
        var _this = this;
        this.downloadItems = [];
        if (this.sound.previews['preview-hq-mp3']) {
            this.downloadItems.push({ label: 'High quality MP3', command: function () { return _this.freeSoundUtilsService.doDownload(_this.sound.previews['preview-hq-mp3']); } });
        }
        if (this.sound.previews['preview-lq-mp3']) {
            this.downloadItems.push({ label: 'Low quality MP3', command: function () { return _this.freeSoundUtilsService.doDownload(_this.sound.previews['preview-lq-mp3']); } });
        }
        if (this.sound.previews['preview-hq-ogg']) {
            this.downloadItems.push({ label: 'High quality OGG', command: function () { return _this.freeSoundUtilsService.doDownload(_this.sound.previews['preview-hq-ogg']); } });
        }
        if (this.sound.previews['preview-lq-ogg']) {
            this.downloadItems.push({ label: 'Low quality OGG', command: function () { return _this.freeSoundUtilsService.doDownload(_this.sound.previews['preview-lq-ogg']); } });
        }
        this.downloadItems.push({ label: 'Original quality', command: function () { return _this.downloadButtonClick(); } });
    };
    SoundItemComponent.prototype.createAudioDescription = function () {
        this.audioDescription = [
            { type: "Type", value: this.sound.type, formater: new UpperCasePipe() },
            { type: "Duration", value: this.sound.duration, formater: new DurationPipe() },
            { type: "Filesize", value: this.sound.filesize, formater: new FileSizePipe() },
            { type: "Samplerate", value: this.sound.samplerate ? this.sound.samplerate.toString() : 'N/A' },
            { type: "Bitdepth", value: this.sound.bitdepth ? this.sound.bitdepth.toString() : 'N/A' },
            { type: "Channels", value: this.sound.channels ? this.sound.channels.toString() : 'N/A' }
        ];
    };
    SoundItemComponent.prototype.tagClick = function (tag) {
        this.onTagClick.emit(tag);
    };
    SoundItemComponent.prototype.downloadButtonClick = function () {
        this.freeSoundUtilsService.doDownload(this.sound.download);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SoundItemComponent.prototype, "sound", null);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SoundItemComponent.prototype, "onTagClick", void 0);
    SoundItemComponent = __decorate([
        Component({
            selector: 'sound-item',
            templateUrl: './sound-item.component.html',
            styleUrls: ['./sound-item.component.less']
        }), 
        __metadata('design:paramtypes', [FreeSoundUtilsService])
    ], SoundItemComponent);
    return SoundItemComponent;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sound-item/sound-item.component.js.map