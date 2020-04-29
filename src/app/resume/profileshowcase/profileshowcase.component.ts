import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-profileshowcase',
  templateUrl: './profileshowcase.component.html',
  styleUrls: ['./profileshowcase.component.css']
})
export class ProfileshowcaseComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'mobile',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/call-24px.svg'))
    .addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/email-24px.svg'))
    .addSvgIcon(
      'resume',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/description-24px.svg'))
  }

  ngOnInit(): void {
  }
  myPicPath = "assets/img/myPic.png";
  facebookPicPath = "assets/img/socialicons/facebook.png";
  linkedinPicPath = "assets/img/socialicons/linkedin.png";
  twitterPicPath = "assets/img/socialicons/twitter.png";
  hangoutsPicPath = "assets/img/socialicons/hangouts.png";
  skypePicPath = "assets/img/socialicons/skype.png";
  gravatarPicPath = "assets/img/socialicons/gravatar.png";
  naukriPicPath = "assets/img/socialicons/naukri.png";

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
}
