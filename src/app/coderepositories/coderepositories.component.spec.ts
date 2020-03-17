import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderepositoriesComponent } from './coderepositories.component';

describe('CoderepositoriesComponent', () => {
  let component: CoderepositoriesComponent;
  let fixture: ComponentFixture<CoderepositoriesComponent>;

  beforeEach(async(() => {
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
