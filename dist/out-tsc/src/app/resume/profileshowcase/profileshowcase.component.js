import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let ProfileshowcaseComponent = class ProfileshowcaseComponent {
    constructor(iconRegistry, sanitizer) {
        this.myPicPath = "assets/img/myPic.png";
        this.facebookPicPath = "assets/img/socialicons/facebook.png";
        this.linkedinPicPath = "assets/img/socialicons/linkedin.png";
        this.twitterPicPath = "assets/img/socialicons/twitter.png";
        this.hangoutsPicPath = "assets/img/socialicons/hangouts.png";
        this.skypePicPath = "assets/img/socialicons/skype.png";
        this.gravatarPicPath = "assets/img/socialicons/gravatar.png";
        this.naukriPicPath = "assets/img/socialicons/naukri.png";
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
        iconRegistry.addSvgIcon('mobile', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/call-24px.svg'))
            .addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/email-24px.svg'))
            .addSvgIcon('resume', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/description-24px.svg'));
    }
    ngOnInit() {
    }
};
ProfileshowcaseComponent = __decorate([
    Component({
        selector: 'app-profileshowcase',
        templateUrl: './profileshowcase.component.html',
        styleUrls: ['./profileshowcase.component.css']
    })
], ProfileshowcaseComponent);
export { ProfileshowcaseComponent };
//# sourceMappingURL=profileshowcase.component.js.map