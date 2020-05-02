import { async, TestBed } from '@angular/core/testing';
import { ProfileshowcaseComponent } from './profileshowcase.component';
describe('ProfileshowcaseComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileshowcaseComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileshowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profileshowcase.component.spec.js.map