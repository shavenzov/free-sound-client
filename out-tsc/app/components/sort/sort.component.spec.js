import { async, TestBed } from '@angular/core/testing';
import { SortComponent } from './sort.component';
describe('SortComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SortComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sort/sort.component.spec.js.map