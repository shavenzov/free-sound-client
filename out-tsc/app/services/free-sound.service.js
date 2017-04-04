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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
export var FreeSoundService = (function () {
    function FreeSoundService(http, 
        /**
         * Инжект настроек API
         */
        apiSettings) {
        this.http = http;
        this.apiSettings = apiSettings;
    }
    /**
     * Redirects to authorization page
     */
    FreeSoundService.prototype.redirectToOAuthPage = function (returnState) {
        document.location.href = this.getOAUTHURL(returnState);
    };
    /**
     * Running the authorization
     * @param code
     */
    FreeSoundService.prototype.auth = function (code) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new URLSearchParams();
        params.set('client_id', this.apiSettings.clientId);
        params.set('client_secret', this.apiSettings.key);
        params.set('grant_type', 'authorization_code');
        params.set('code', code);
        return this.http.post(this.authURL, params.toString(), { headers: headers }).map(function (response) { return _this.onAuth(response); });
    };
    FreeSoundService.prototype.onAuth = function (response) {
        this.authToken = response.json();
        this.authToken.expires_in = new Date().getTime() + this.authToken.expires_in - 5000;
        return this.authToken;
    };
    Object.defineProperty(FreeSoundService.prototype, "isAuth", {
        /**
         * Checking is the user authorized/token expired or not
         * @returns {boolean}
         */
        get: function () {
            return this.authToken && (this.authToken.expires_in > new Date().getTime());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Running search
     * @param searchParams
     * @returns {Observable<SearchResult>} Observable loading info
     */
    FreeSoundService.prototype.search = function (searchParams) {
        return this.http.get(this.makeSearchStringURL(searchParams), this.requestOptionsArgs).map(function (response) { return response.json(); });
    };
    /**
     * Creates api url for search
     * @param searchString
     * @returns {string}
     */
    FreeSoundService.prototype.makeSearchStringURL = function (searchParams) {
        var params = new URLSearchParams();
        params.set('query', searchParams.query);
        params.set('fields', FreeSoundService.fields.join());
        if (searchParams.page) {
            params.set('page', searchParams.page.toString());
        }
        if (searchParams.pageSize) {
            params.set('page_size', searchParams.pageSize.toString());
        }
        if (searchParams.sort) {
            params.set('sort', searchParams.sort);
        }
        return this.apiSettings.baseURL + 'search/text/?' + params.toString();
    };
    Object.defineProperty(FreeSoundService.prototype, "requestOptionsArgs", {
        /*
        Creates request header with authorization params
         */
        get: function () {
            return { headers: new Headers({ 'Authorization': "Bearer " + this.authToken.access_token }) };
        },
        enumerable: true,
        configurable: true
    });
    FreeSoundService.prototype.getOAUTHURL = function (returnState) {
        var url = this.apiSettings.baseURL + "oauth2/authorize/?client_id=" + this.apiSettings.clientId + "&response_type=code";
        if (returnState) {
            url += "&state=" + returnState;
        }
        return url;
    };
    Object.defineProperty(FreeSoundService.prototype, "authURL", {
        get: function () {
            return this.apiSettings.baseURL + "oauth2/access_token/";
        },
        enumerable: true,
        configurable: true
    });
    FreeSoundService.fields = [
        'id', 'name', 'tags', 'description', 'created', 'license', 'type', 'channels', 'filesize', 'bitrate', 'bitdepth', 'duration', 'samplerate', 'username', 'download', 'previews', 'images', 'num_downloads', 'avg_rating', 'num_ratings', 'rate'
    ];
    FreeSoundService = __decorate([
        Injectable(),
        __param(1, Inject('FSApiSettings')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Http !== 'undefined' && Http) === 'function' && _a) || Object, Object])
    ], FreeSoundService);
    return FreeSoundService;
    var _a;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/services/free-sound.service.js.map