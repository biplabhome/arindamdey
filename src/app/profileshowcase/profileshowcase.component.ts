import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileshowcase',
  templateUrl: './profileshowcase.component.html',
  styleUrls: ['./profileshowcase.component.css']
})
export class ProfileshowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myPicPath = "assets/img/myPic.png";
  facebookPicPath = "assets/img/facebook.png";
  linkedinPicPath = "assets/img/linkedin.png";
  twitterPicPath = "assets/img/twitter.png";
}
