import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechskillsComponent } from './techskills.component';

describe('TechskillsComponent', () => {
  let component: TechskillsComponent;
  let fixture: ComponentFixture<TechskillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
