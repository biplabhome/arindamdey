import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileshowcaseComponent } from './profileshowcase.component';

describe('ProfileshowcaseComponent', () => {
  let component: ProfileshowcaseComponent;
  let fixture: ComponentFixture<ProfileshowcaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileshowcaseComponent ]
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
