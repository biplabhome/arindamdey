import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudrakshComponent } from './rudraksh.component';

describe('RudrakshComponent', () => {
  let component: RudrakshComponent;
  let fixture: ComponentFixture<RudrakshComponent>;

  beforeEach(async(() => {
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
