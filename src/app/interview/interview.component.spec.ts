import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterviewComponent } from './interview.component';

describe('InterviewComponent', () => {
  let component: InterviewComponent;
  let fixture: ComponentFixture<InterviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
