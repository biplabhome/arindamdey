import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CareerobjectiveComponent } from './careerobjective.component';

describe('CareerobjectiveComponent', () => {
  let component: CareerobjectiveComponent;
  let fixture: ComponentFixture<CareerobjectiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerobjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerobjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
