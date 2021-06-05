import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChakrasComponent } from './chakras.component';

describe('ChakrasComponent', () => {
  let component: ChakrasComponent;
  let fixture: ComponentFixture<ChakrasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
