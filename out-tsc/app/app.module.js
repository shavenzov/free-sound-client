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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { FreeSoundService } from "./services/free-sound.service";
import { AudioService } from "./services/audio.service";
import { FreeSoundResultResolverService } from "./services/free-sound-result-resolver.service";
import { FreeSoundUtilsService } from "./services/free-sound-utils.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { PlayerComponent } from './components/player/player.component';
import { SoundItemComponent } from './components/sound-item/sound-item.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SortButtonComponent } from "./components/sort/sort-button/sort-button.component";
import { SortComponent } from "./components/sort/sort.component";
import { FixedButton } from "./components/sort/sort-button/fixed-button";
import { FileSizePipe } from './pipes/file-size.pipe';
import { ValueDescriptionPipe } from './pipes/value-description.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { NumLoadedPipe } from './pipes/num-loaded.pipe';
import { routes } from './routes';
import { environment } from "../environments/environment";
import { AuthComponent } from './components/auth/auth.component';
import { AuthErrorComponent } from './components/auth-error/auth-error.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                PlayerComponent,
                SoundItemComponent,
                ProgressBarComponent,
                SearchPanelComponent,
                MainPageComponent,
                NotFoundComponent,
                SortButtonComponent,
                SortComponent,
                FixedButton,
                FileSizePipe,
                ValueDescriptionPipe,
                DurationPipe,
                NumLoadedPipe,
                AuthComponent,
                AuthErrorComponent
            ],
            imports: [
                RouterModule.forRoot(routes),
                BrowserModule,
                FormsModule,
                HttpModule,
                InputTextModule,
                ButtonModule,
                MessagesModule,
                RatingModule,
                PaginatorModule,
                SplitButtonModule
            ],
            providers: [
                FreeSoundService,
                AudioService,
                FreeSoundUtilsService,
                FreeSoundResultResolverService,
                AuthGuardService,
                { provide: 'FSApiSettings', useValue: environment.freeSoundAPIEnvironment }
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/app.module.js.map