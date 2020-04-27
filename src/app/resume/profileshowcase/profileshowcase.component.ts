import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

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
  hangoutsPicPath = "assets/img/hangouts.png";
  skypePicPath = "assets/img/skype.png";

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
