import { async, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
describe('ProgressBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProgressBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProgressBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/progress-bar/progress-bar.component.spec.js.map