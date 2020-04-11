import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileshowcaseComponent } from './profileshowcase.component';

describe('ProfileshowcaseComponent', () => {
  let component: ProfileshowcaseComponent;
  let fixture: ComponentFixture<ProfileshowcaseComponent>;

  beforeEach(async(() => {
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
