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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { AudioService } from "./audio.service";
export var FreeSoundUtilsService = (function () {
    function FreeSoundUtilsService(router, apiSettings, audioService) {
        this.router = router;
        this.apiSettings = apiSettings;
        this.audioService = audioService;
    }
    FreeSoundUtilsService.prototype.calculateUrlTree = function (params) {
        var commands = ['search'];
        if (params.query) {
            commands.push(params.query);
            if (params.sort) {
                commands.push(params.sort);
                if (params.page) {
                    commands.push(params.page);
                    if (params.pageSize) {
                        commands.push(params.pageSize);
                    }
                }
            }
        }
        return this.router.createUrlTree(commands);
    };
    /**
     * Список параметров текущего роута объединенного с параметрами по умолчанию
     * @returns {any}
     */
    FreeSoundUtilsService.prototype.mergeWithDefault = function (routeParams) {
        var defaultParams = this.apiSettings.defaultSearchParams; //Получаем параметры по умолчанию
        //Миксуем с параметрами текущего роута
        return Object.assign(defaultParams, routeParams);
    };
    /**
     * Осуществляет навигацию к указанному роуту используя FreeSoundSearchParams
     * @param params
     */
    FreeSoundUtilsService.prototype.navigate = function (params) {
        window.scrollTo(0, 0);
        this.audioService.pause();
        return this.router.navigateByUrl(this.calculateUrlTree(params));
    };
    /**
     * Возвращает массив доступных значений pageSize для UI
     * @returns {number[]}
     */
    FreeSoundUtilsService.prototype.getRowsPerPageOptions = function () {
        var options = [];
        var minPageSize = this.apiSettings.defaultPageSize;
        var maxPageSize = this.apiSettings.maximumPageSize;
        var incPageSize = this.apiSettings.defaultPageSize;
        var numOptions = Math.floor(maxPageSize / incPageSize);
        for (var nextPageSize = minPageSize; nextPageSize <= maxPageSize; nextPageSize += incPageSize) {
            options.push(nextPageSize);
        }
        return options;
    };
    /**
     * Инициирует загрузку  файла
     * @param url - ресурс который необходимо загрузить
     */
    FreeSoundUtilsService.prototype.doDownload = function (url) {
        window.open(url, "_blank");
    };
    FreeSoundUtilsService = __decorate([
        Injectable(),
        __param(1, Inject('FSApiSettings')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Router !== 'undefined' && Router) === 'function' && _a) || Object, Object, AudioService])
    ], FreeSoundUtilsService);
    return FreeSoundUtilsService;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/services/free-sound-utils.service.js.map