import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoderepositoriesComponent } from './coderepositories.component';

describe('CoderepositoriesComponent', () => {
  let component: CoderepositoriesComponent;
  let fixture: ComponentFixture<CoderepositoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoderepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
