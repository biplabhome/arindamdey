import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertheaderComponent } from './certheader.component';

describe('CertheaderComponent', () => {
  let component: CertheaderComponent;
  let fixture: ComponentFixture<CertheaderComponent>;

  beforeEach(async(() => {
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
