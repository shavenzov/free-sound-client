import { async, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
describe('AuthComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AuthComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/auth/auth.component.spec.js.map