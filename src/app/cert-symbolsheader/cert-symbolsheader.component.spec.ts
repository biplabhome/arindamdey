import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertSymbolsheaderComponent } from './cert-symbolsheader.component';

describe('CertSymbolsheaderComponent', () => {
  let component: CertSymbolsheaderComponent;
  let fixture: ComponentFixture<CertSymbolsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertSymbolsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertSymbolsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
