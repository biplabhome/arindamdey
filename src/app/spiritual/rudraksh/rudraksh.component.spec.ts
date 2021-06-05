import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RudrakshComponent } from './rudraksh.component';

describe('RudrakshComponent', () => {
  let component: RudrakshComponent;
  let fixture: ComponentFixture<RudrakshComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RudrakshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudrakshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
