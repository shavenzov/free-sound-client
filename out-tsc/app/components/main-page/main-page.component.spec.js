import { async, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
describe('MainPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MainPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MainPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/main-page/main-page.component.spec.js.map