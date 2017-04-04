/**
 * /**
 * This code has been written by Denis Shavenzov
 * If you have any questions or notices you can contact me by email shavenzov@gmail.com
 *
 * PrimeNG button component with corrected error that didn't allow dynamic remove/set icon
 *
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
import { Button } from "primeng/components/button/button";
import { Directive } from "@angular/core";
import { DomHandler } from "primeng/components/dom/domhandler";
export var FixedButton = (function (_super) {
    __extends(FixedButton, _super);
    function FixedButton() {
        _super.apply(this, arguments);
    }
    FixedButton.prototype.getStyleClass = function () {
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        return styleClass + ' ' + this.getButtonIconClass();
    };
    FixedButton.prototype.getButtonIconClass = function () {
        var buttonIconClass = '';
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left') {
                    buttonIconClass = 'ui-button-text-icon-left';
                }
                else {
                    buttonIconClass = 'ui-button-text-icon-right';
                }
            }
            else {
                buttonIconClass = 'ui-button-icon-only';
            }
        }
        else {
            buttonIconClass = 'ui-button-text-only';
        }
        this.buttonIconClass = buttonIconClass;
        return buttonIconClass;
    };
    Object.defineProperty(FixedButton.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            if (this.initialized) {
                if (val) {
                    this.createIconElement(val);
                }
                else {
                    this.removeIconElement();
                }
                this.domHandler.removeClass(this.el.nativeElement, this.buttonIconClass);
                this.domHandler.addClass(this.el.nativeElement, this.getButtonIconClass());
            }
        },
        enumerable: true,
        configurable: true
    });
    FixedButton.prototype.createIconElement = function (val) {
        var element = this.domHandler.findSingle(this.el.nativeElement, '.fa');
        if (!element) {
            element = document.createElement("span");
            this.el.nativeElement.appendChild(element);
        }
        var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
        element.className = iconPosClass + ' ui-c fa fa-fw ' + val;
    };
    FixedButton.prototype.removeIconElement = function () {
        var element = this.domHandler.findSingle(this.el.nativeElement, '.fa');
        if (element) {
            this.el.nativeElement.removeChild(element);
        }
    };
    FixedButton = __decorate([
        Directive({
            selector: '[fixedButton]',
            providers: [DomHandler]
        }), 
        __metadata('design:paramtypes', [])
    ], FixedButton);
    return FixedButton;
}(Button));
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sort/sort-button/fixed-button.js.map