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
  saSymbolPath = "assets/img/certs/sa.png";
  spSymbolPath = "assets/img/certs/sp.png";
  techarchaccentureSymbolPath = "assets/img/certs/techarchaccenture.png";
  psm1SymbolPath = "assets/img/certs/psm1.png";
  psm2SymbolPath = "assets/img/certs/psm2.png";
  pspo1SymbolPath = "assets/img/certs/pspo1.png";
  awsSolArchProfSymbolPath = "assets/img/certs/awssolarchprof_badge.png";
}
