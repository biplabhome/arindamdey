import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerobjectiveComponent } from './careerobjective.component';

describe('CareerobjectiveComponent', () => {
  let component: CareerobjectiveComponent;
  let fixture: ComponentFixture<CareerobjectiveComponent>;

  beforeEach(async(() => {
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
