import { async, TestBed } from '@angular/core/testing';
import { SoundItemComponent } from './sound-item.component';
describe('SoundItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SoundItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SoundItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/server/projects/Angular-2/free-sound-client/src/app/components/sound-item/sound-item.component.spec.js.map