import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(changeDetectorRef, media, iconRegistry, sanitizer) {
        this.title = 'arindamdeyinfo';
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/thumbup-icon.svg'))
            .addSvgIcon('arrow_right', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/arrow_right-24px.svg'))
            .addSvgIcon('spirit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/mood-24px.svg'))
            .addSvgIcon('numerology', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/fingerprint-24px.svg'))
            .addSvgIcon('chakras', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/all_inclusive-24px.svg'))
            .addSvgIcon('rudraksh', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/star-24px.svg'));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map