import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumerologyComponent } from './numerology.component';

describe('NumerologyComponent', () => {
  let component: NumerologyComponent;
  let fixture: ComponentFixture<NumerologyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
