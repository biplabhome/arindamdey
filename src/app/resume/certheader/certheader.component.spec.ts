import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CertheaderComponent } from './certheader.component';

describe('CertheaderComponent', () => {
  let component: CertheaderComponent;
  let fixture: ComponentFixture<CertheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
