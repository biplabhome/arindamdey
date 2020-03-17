import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nsecSymbolPath = "assets/img/nsec.png";
  nsecPicSymbolPath = "assets/img/nsecPic.png";
  jvSymbolPath = "assets/img/jv.png";
  jvPicPath = "assets/img/jvPic.png";
  wbutPicPath = "assets/img/wbut.png";
}
