import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certheader',
  templateUrl: './certheader.component.html',
  styleUrls: ['./certheader.component.css']
})
export class CertheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saSymbolPath = "assets/img/sa.png";
  spSymbolPath = "assets/img/sp.png";
  techarchaccentureSymbolPath = "assets/img/techarchaccenture.png";
  psm1SymbolPath = "assets/img/psm1.png";
  psm2SymbolPath = "assets/img/psm2.png";
  pspo1SymbolPath = "assets/img/pspo1.png";
  awsSolArchProfSymbolPath = "assets/img/awsSolArchProf.png";
}
