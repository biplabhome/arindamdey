import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'arindamdeyinfo';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    , iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/thumbup-icon.svg'))
        .addSvgIcon(
          'arrow_right',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/arrow_right-24px.svg'))
        .addSvgIcon(
          'spirit',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/mood-24px.svg'))
        .addSvgIcon(
          'numerology',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/fingerprint-24px.svg'))
        .addSvgIcon(
          'chakras',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/all_inclusive-24px.svg'))
        .addSvgIcon(
          'rudraksh',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/star-24px.svg'))
        .addSvgIcon(
          'chat',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/chat-24px.svg'))
            ;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
