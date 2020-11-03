(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../websocket.service */ "SGxG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r4, " ");
} }
class ChatComponent {
    constructor(iconRegistry, sanitizer, websocketservice) {
        this.websocketservice = websocketservice;
        this.messages = [];
        this.typeStatusMsg = '';
        iconRegistry.addSvgIcon('send', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/send-24px.svg'));
    }
    ngOnInit() {
        this.websocketservice
            .listen('chatmsg')
            .subscribe((data) => {
            this.messages.push(data);
            console.log('changed data is: ' + data);
        });
        this.websocketservice
            .listen('typing')
            .subscribe((data) => {
            this.typeStatusMsg = "typing...";
        });
    }
    typeStatus(event, status) {
        this.typeStatusMsg = "typing...";
        this.websocketservice.emit('typing', this.typeStatusMsg);
        if (event.keyCode == 13)
            this.postMsg(event);
        if (status == 0) {
            this.typeStatusMsg = "";
            this.websocketservice.emit('typing', this.typeStatusMsg);
        }
    }
    postMsg(f) {
        this.websocketservice.emit('chatmsg', f.value);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 13, vars: 2, consts: [[1, "row", "container"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [4, "ngFor", "ngForOf"], ["status", ""], ["novalidate", "", 3, "ngSubmit"], ["chatForm", "ngForm"], ["type", "text", "name", "message", "ngModel", "", 3, "keyup", "focusout"], ["msgBox", ""], ["type", "submit"], ["svgIcon", "send"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.postMsg(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatComponent_Template_input_keyup_9_listener($event) { return ctx.typeStatus($event, 1); })("focusout", function ChatComponent_Template_input_focusout_9_listener($event) { return ctx.typeStatus($event, 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.typeStatusMsg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["mat-icon[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OneDrive\Code\Websites\arindamdeyinfo\src\main.ts */"zUnb");


/***/ }),

/***/ "04Iq":
/*!***********************************************************!*\
  !*** ./src/app/resume/certheader/certheader.component.ts ***!
  \***********************************************************/
/*! exports provided: CertheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertheaderComponent", function() { return CertheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CertheaderComponent {
    constructor() {
        this.saSymbolPath = "assets/img/certs/sa.png";
        this.spSymbolPath = "assets/img/certs/sp.png";
        this.techarchaccentureSymbolPath = "assets/img/certs/techarchaccenture.png";
        this.psm1SymbolPath = "assets/img/certs/psm1.png";
        this.psm2SymbolPath = "assets/img/certs/psm2.png";
        this.pspo1SymbolPath = "assets/img/certs/pspo1.png";
        this.awsSolArchProfSymbolPath = "assets/img/certs/awssolarchprof_badge.png";
    }
    ngOnInit() {
    }
}
CertheaderComponent.ɵfac = function CertheaderComponent_Factory(t) { return new (t || CertheaderComponent)(); };
CertheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertheaderComponent, selectors: [["app-certheader"]], decls: 10, vars: 7, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], ["alt", "sa", 1, "img-fluid", 3, "src"], ["alt", "sp", 1, "img-fluid", 3, "src"], ["alt", "techarchaccenture", 1, "img-fluid", 3, "src"], ["alt", "psm1", 1, "img-fluid", 3, "src"], ["alt", "psm2", 1, "img-fluid", 3, "src"], ["alt", "pspo1", 1, "img-fluid", 3, "src"], ["alt", "awsSolArchProf", "align", "right", "height", "70", "width", "70", 1, "img-fluid", 3, "src"]], template: function CertheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.saSymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.spSymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.techarchaccentureSymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.psm1SymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.psm2SymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pspo1SymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.awsSolArchProfSymbolPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".alignright[_ngcontent-%COMP%]{\r\n    align-self: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2NlcnRoZWFkZXIvY2VydGhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL2NlcnRoZWFkZXIvY2VydGhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWducmlnaHR7XHJcbiAgICBhbGlnbi1zZWxmOiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certheader',
                templateUrl: './certheader.component.html',
                styleUrls: ['./certheader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0nxp":
/*!*****************************************************************!*\
  !*** ./src/app/resume/certification/certification.component.ts ***!
  \*****************************************************************/
/*! exports provided: CertificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationComponent", function() { return CertificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CertificationComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.desc, " ");
} }
class CertificationComponent {
    constructor() {
        this.certDetails = [
            {
                name: "AWS Certified Solutions Architect - Professional",
                desc: "by Amazon Cloud",
                image: "assets/img/certs/awssolarchprof_badge.png"
            },
            {
                name: "Technology Architect Associate",
                desc: "by Accenture [Globally 6500+ professional] Master Architect Program",
                image: "assets/img/certs/techarchaccenture.png"
            },
            {
                name: "PSM1 [Professional Scrum Master]",
                desc: " (PSM 1 & 2) issued by Scrum.org [Worldwide 3000+ members for 30 years old framework ]",
                image: "assets/img/certs/psm1.png"
            },
            {
                name: "PSM2 [Professional Scrum Master Advanced]",
                desc: "by Scrum.org [Worldwide 3000+ members for 30 years old framework ]",
                image: "assets/img/certs/psm2.png"
            },
            {
                name: "PSPO 1 [Professional Scrum Product Owner]",
                desc: "by Scrum.org",
                image: "assets/img/certs/pspo1.png"
            },
            {
                name: "SAFe® 4 Agilist",
                desc: "by scaledagileframework.org",
                image: "assets/img/certs/sa.png"
            },
            {
                name: "SAFe® 4 Practitioner",
                desc: "by scaledagileframework.org",
                image: "assets/img/certs/sp.png"
            }
        ];
    }
    ngOnInit() {
    }
}
CertificationComponent.ɵfac = function CertificationComponent_Factory(t) { return new (t || CertificationComponent)(); };
CertificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificationComponent, selectors: [["app-certification"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"], [1, "col-md-1", "col-xs-1", "col-lg-1"], ["alt", "sa", 1, "img-fluid", 3, "src"], [1, "col-md-10", "col-xs-10", "col-lg-10"]], template: function CertificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Certificates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CertificationComponent_mat_card_actions_10_Template, 9, 3, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certDetails);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2NlcnRpZmljYXRpb24vY2VydGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9jZXJ0aWZpY2F0aW9uL2NlcnRpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wSGVhZGVye1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certification',
                templateUrl: './certification.component.html',
                styleUrls: ['./certification.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0o0m":
/*!**************************************************!*\
  !*** ./src/app/interview/interview.component.ts ***!
  \**************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function InterviewComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.qs, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.ans, " ");
} }
class InterviewComponent {
    constructor() {
        this.qsl = [
            {
                qs: "Azure Reference Architechture",
                ans: "https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
            },
            {
                qs: "Azure Services",
                ans: "https://azure.microsoft.com/en-in/services/"
            }
        ];
    }
    ngOnInit() {
    }
}
InterviewComponent.ɵfac = function InterviewComponent_Factory(t) { return new (t || InterviewComponent)(); };
InterviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterviewComponent, selectors: [["app-interview"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"]], template: function InterviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Azure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InterviewComponent_mat_card_actions_10_Template, 5, 2, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qsl);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmlldy9pbnRlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interview',
                templateUrl: './interview.component.html',
                styleUrls: ['./interview.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Pkt7":
/*!**************************************************************!*\
  !*** ./src/app/spiritual/numerology/numerology.component.ts ***!
  \**************************************************************/
/*! exports provided: NumerologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumerologyComponent", function() { return NumerologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NumerologyComponent_mat_grid_list_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numA_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r4.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r4.frndNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r4.enemyNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r4.nutralNum);
} }
function NumerologyComponent_mat_grid_list_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numA_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r5.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r5.lettersChero);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](numA_r5.lettersNew);
} }
class NumerologyComponent {
    constructor() {
        this.myFilter = (d) => {
            return d <= new Date();
        };
        this.startDate = new Date(1990, 0, 1);
        this.selectedDate = new Date();
        this.heartDesireNumberChero = 0;
        this.heartDesireNumberNew = 0;
        this.outerPersonalityNumberChero = 0;
        this.outerPersonalityNumberNew = 0;
        this.firstChallangeNumberChero = 0;
        this.firstChallangeNumberNew = 0;
        this.secondChallangeNumberChero = 0;
        this.secondChallangeNumberNew = 0;
        this.thirdChallangeNumberChero = 0;
        this.thirdChallangeNumberNew = 0;
        this.fourthChallangeNumberChero = 0;
        this.fourthChallangeNumberNew = 0;
        this.totalChero = 0;
        this.totalNew = 0;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.frndNumbers = '';
        this.enemyNumbers = '';
        this.nutralNumbers = '';
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
        this.cheroNum = [
            { l: '', n: 0 }, { l: 'aijqy', n: 1 }, { l: 'bkr', n: 2 }, { l: 'cgls', n: 3 }, { l: 'dmt', n: 4 }, { l: 'ehnx', n: 5 }, { l: 'uvw', n: 6 },
            { l: 'oz', n: 7 }, { l: 'fp', n: 8 }, { l: '', n: 9 }
        ];
        this.newNum = [
            { l: '', n: 0 }, { l: 'ajs', n: 1 }, { l: 'bkt', n: 2 }, { l: 'clu', n: 3 }, { l: 'dmv', n: 4 }, { l: 'enw', n: 5 }, { l: 'fox', n: 6 },
            { l: 'gpy', n: 7 }, { l: 'hqz', n: 8 }, { l: 'ir', n: 9 }
        ];
        this.cheroNumList = [
            {
                num: '0',
                lettersChero: '',
                lettersNew: ''
            },
            {
                num: '1',
                lettersChero: 'aijqy',
                lettersNew: ''
            },
            {
                num: '2',
                lettersChero: 'bkr',
                lettersNew: ''
            },
            {
                num: '3',
                lettersChero: 'cgls',
                lettersNew: ''
            },
            {
                num: '4',
                lettersChero: 'dmt',
                lettersNew: ''
            },
            {
                num: '5',
                lettersChero: 'ehnx',
                lettersNew: ''
            },
            {
                num: '6',
                lettersChero: 'uvw',
                lettersNew: ''
            },
            {
                num: '7',
                lettersChero: 'oz',
                lettersNew: ''
            },
            {
                num: '8',
                lettersChero: 'fp',
                lettersNew: ''
            },
            {
                num: '9',
                lettersChero: '',
                lettersNew: ''
            }
        ];
        this.numAffinityChart = [
            {
                num: '1',
                frndNum: '2,3,4,7,9',
                enemyNum: '6,8',
                nutralNum: '5'
            },
            {
                num: '2',
                frndNum: '1,4,5,7',
                enemyNum: '-',
                nutralNum: '3,6,8,9'
            },
            {
                num: '3',
                frndNum: '1,2,4,7,9',
                enemyNum: '5,6',
                nutralNum: '8'
            },
            {
                num: '4',
                frndNum: '1,2,3,7,9',
                enemyNum: '6,8',
                nutralNum: '5'
            },
            {
                num: '5',
                frndNum: '1,4,6',
                enemyNum: '2,7',
                nutralNum: '3,8,9'
            },
            {
                num: '6',
                frndNum: '5,8',
                enemyNum: '1,2,4,7',
                nutralNum: '3,9'
            },
            {
                num: '7',
                frndNum: '1,2,4,5',
                enemyNum: '-',
                nutralNum: '3,6,8,9'
            },
            {
                num: '8',
                frndNum: '5,6',
                enemyNum: '1,2,4,7,9',
                nutralNum: '3'
            },
            {
                num: '9',
                frndNum: '1,2,3,4,7',
                enemyNum: '5',
                nutralNum: '6,8'
            }
        ];
    }
    ngOnInit() {
    }
    //events: string[] = [];
    addEvent(type, event) {
        this.dayNumberCalculate(event);
        //this.events.push(`${type}: ${event.value}`);
    }
    dayNumberCalculate(event) {
        this.selectedDate = new Date(event.target.value);
        var day = this.numberSingleDigitSum(this.selectedDate.getDate());
        var month = this.numberSingleDigitSum(this.selectedDate.getMonth() + 1);
        var year = this.numberSingleDigitSum(this.selectedDate.getFullYear());
        this.firstChallangeNumberChero
            = this.firstChallangeNumberNew
                = (day > month) ? (day - month) : (month - day);
        this.secondChallangeNumberChero
            = this.secondChallangeNumberNew
                = (day > year) ? (day - year) : (year - day);
        this.thirdChallangeNumberChero
            = this.thirdChallangeNumberNew
                = (day > year) ? (day - year) : (year - day);
        this.fourthChallangeNumberChero = (this.firstChallangeNumberChero > this.secondChallangeNumberChero)
            ? (this.firstChallangeNumberChero - this.secondChallangeNumberChero)
            : (this.secondChallangeNumberChero - this.firstChallangeNumberChero);
        this.fourthChallangeNumberNew = (this.firstChallangeNumberNew > this.secondChallangeNumberNew)
            ? (this.firstChallangeNumberNew - this.secondChallangeNumberNew)
            : (this.secondChallangeNumberNew - this.firstChallangeNumberNew);
        this.fourthChallangeNumberChero
            = this.fourthChallangeNumberNew
                = (month > year) ? (month - year) : (year - month);
        this.firstNumber = day;
        this.secondNumber = this.numberSingleDigitSum(day + month + year);
    }
    selectcalculate(event) {
        var v = event.target.value.toLowerCase();
        this.totalNew = 0;
        this.totalChero = 0;
        for (var i = 0; i < v.length; i++) {
            var parent = this;
            var isVowel = this.vowels.some(element => element == v[i]);
            this.cheroNum.find(function (element) {
                if (element.l.indexOf(v[i]) != -1) {
                    parent.totalChero += element.n;
                    parent.heartDesireNumberChero += isVowel ? element.n : 0;
                    parent.outerPersonalityNumberChero += !isVowel ? element.n : 0;
                }
            });
            this.newNum.find(function (element) {
                if (element.l.indexOf(v[i]) != -1) {
                    parent.totalNew += element.n;
                    parent.heartDesireNumberNew += isVowel ? element.n : 0;
                    parent.outerPersonalityNumberNew += !isVowel ? element.n : 0;
                }
            });
        }
        this.totalChero = this.numberSingleDigitSum(this.totalChero);
        this.totalNew = this.numberSingleDigitSum(this.totalNew);
        this.heartDesireNumberChero = this.numberSingleDigitSum(this.heartDesireNumberChero);
        this.heartDesireNumberNew = this.numberSingleDigitSum(this.heartDesireNumberNew);
        this.outerPersonalityNumberChero = this.numberSingleDigitSum(this.outerPersonalityNumberChero);
        this.outerPersonalityNumberNew = this.numberSingleDigitSum(this.outerPersonalityNumberNew);
    }
    numberSingleDigitSum(n) {
        var final = 0;
        while (n > 0) {
            var r = n % 10;
            final += r;
            n = (n - r) / 10;
        }
        return (final > 9) ? this.numberSingleDigitSum(final) : final;
    }
}
NumerologyComponent.ɵfac = function NumerologyComponent_Factory(t) { return new (t || NumerologyComponent)(); };
NumerologyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumerologyComponent, selectors: [["app-numerology"]], decls: 124, vars: 24, consts: [[1, "row", "container"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "row"], [3, "keyup"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker", "dateInput", "dateChange"], ["dtValue", ""], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""], [1, "col-md-6", "col-sm-6", "col-xs-6", "col-lg-6"], ["cols", "5", "rowHeight", "5:1"], ["colspan", "3"], ["cols", "4", "rowHeight", "5:1", "gutterSize", "5px"], ["cols", "4", "rowHeight", "5:1", "gutterSize", "5px", 4, "ngFor", "ngForOf"], ["cols", "3", "rowHeight", "5:1", "gutterSize", "5px", 4, "ngFor", "ngForOf"], ["cols", "3", "rowHeight", "5:1", "gutterSize", "5px"]], template: function NumerologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Numerology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NumerologyComponent_Template_input_keyup_5_listener($event) { return ctx.selectcalculate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateInput", function NumerologyComponent_Template_input_dateInput_10_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function NumerologyComponent_Template_input_dateChange_10_listener($event) { return ctx.addEvent("change", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Personality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Chero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Life Path/2nd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Expression/Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Heart Desire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Psychic/1st");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Outer Personality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Challanges:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Chero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "1st Challange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2nd Challange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "3rd Challange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "4rth Challange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Number Affinity Chart:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-grid-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Friendly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Natural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Enemy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, NumerologyComponent_mat_grid_list_109_Template, 9, 4, "mat-grid-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "LetterValues:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-grid-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "mat-grid-tile", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "CheroLetters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "NewLetters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, NumerologyComponent_mat_grid_list_123_Template, 7, 3, "mat-grid-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heartDesireNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heartDesireNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.outerPersonalityNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.outerPersonalityNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstChallangeNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstChallangeNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondChallangeNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondChallangeNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.thirdChallangeNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.thirdChallangeNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fourthChallangeNumberChero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fourthChallangeNumberNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numAffinityChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cheroNumList);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepicker"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\r\n    background: lightblue;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpcml0dWFsL251bWVyb2xvZ3kvbnVtZXJvbG9neS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3Bpcml0dWFsL251bWVyb2xvZ3kvbnVtZXJvbG9neS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumerologyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-numerology',
                templateUrl: './numerology.component.html',
                styleUrls: ['./numerology.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q0x9":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _certheader_certheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certheader/certheader.component */ "04Iq");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "hcFL");
/* harmony import */ var _profileshowcase_profileshowcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profileshowcase/profileshowcase.component */ "lyQU");
/* harmony import */ var _profilesummary_profilesummary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profilesummary/profilesummary.component */ "lyIa");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience/experience.component */ "aAxc");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./achievements/achievements.component */ "SXTQ");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "sMZx");
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./certification/certification.component */ "0nxp");
/* harmony import */ var _techskills_techskills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./techskills/techskills.component */ "grwu");
/* harmony import */ var _coderepositories_coderepositories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coderepositories/coderepositories.component */ "fV0J");













class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 22, vars: 0, consts: [[1, "container", "pt-3"], [1, "col-xs-12", "col-md-12"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-certheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-profileshowcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-profilesummary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-techskills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-coderepositories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _certheader_certheader_component__WEBPACK_IMPORTED_MODULE_2__["CertheaderComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _profileshowcase_profileshowcase_component__WEBPACK_IMPORTED_MODULE_4__["ProfileshowcaseComponent"], _profilesummary_profilesummary_component__WEBPACK_IMPORTED_MODULE_5__["ProfilesummaryComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_6__["ExperienceComponent"], _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__["AchievementsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], _certification_certification_component__WEBPACK_IMPORTED_MODULE_9__["CertificationComponent"], _techskills_techskills_component__WEBPACK_IMPORTED_MODULE_10__["TechskillsComponent"], _coderepositories_coderepositories_component__WEBPACK_IMPORTED_MODULE_11__["CoderepositoriesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SGxG":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "gFX4");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class WebsocketService {
    constructor() {
        this.uri = 'ws://apihubnode.azurewebsites.net';
        this.listen = (event) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on(event, (message) => {
                    observer.next(message);
                });
            });
        };
        this.emit = (event, data) => {
            this.socket.emit(event, data);
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.uri);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SXTQ":
/*!***************************************************************!*\
  !*** ./src/app/resume/achievements/achievements.component.ts ***!
  \***************************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AchievementsComponent_mat_card_actions_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const award_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](award_r3);
} }
function AchievementsComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AchievementsComponent_mat_card_actions_10_div_2_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.keyPoint, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.awardList);
} }
class AchievementsComponent {
    constructor() {
        this.acomplishment = [
            {
                keyPoint: "Acknowledged in ACE Award, a milestone in Accenture in Apr’17, which is a achievement award for a location among all the accounts and project for zero defect, zero escalation and outstanding team performance",
                awardList: []
            },
            {
                keyPoint: "Bagged Recognition Points Programme several times for outstanding delivery skill",
                awardList: []
            },
            {
                keyPoint: "Won:",
                awardList: [
                    "Delivery Excellence Award from client in 2014",
                    "Star of the Mobile Release and Delivery Excellence Recognition in Jan’16 ",
                    "Innovation Champion of the Account in 2013"
                ]
            },
            {
                keyPoint: "Increased First Time Right (FTR) measures to 80% and reduced Cycle Time (CT) by 40% with decreased Lead time; delivered using the Agile SAFe methodologies",
                awardList: []
            },
            {
                keyPoint: "Coordinated multiple medium and small sized projects for SAP as a part of Intelligence Platform serving 100+ client AI and automation through a single platform in a mature onshore/offshore model",
                awardList: []
            },
            {
                keyPoint: "Recovered a project in trouble as Customer Facing Delivery Manager through measures such as Responsiveness, Architectural corrections, automated white box testing with Veracode in Frontier",
                awardList: []
            },
            {
                keyPoint: "Mentored and coached the project team on areas such as implementation of pure Scrum and Agile transformation; planned and integrated the work of multiple teams on a project; provided input on team performance and rewar",
                awardList: []
            },
        ];
    }
    ngOnInit() {
    }
}
AchievementsComponent.ɵfac = function AchievementsComponent_Factory(t) { return new (t || AchievementsComponent)(); };
AchievementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementsComponent, selectors: [["app-achievements"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"], ["class", "indent", 4, "ngFor", "ngForOf"], [1, "indent"]], template: function AchievementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Significant Acomplishments! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AchievementsComponent_mat_card_actions_10_Template, 3, 2, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.acomplishment);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\r\n.indent[_ngcontent-%COMP%]{\r\n    text-indent: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2FjaGlldmVtZW50cy9hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9hY2hpZXZlbWVudHMvYWNoaWV2ZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcEhlYWRlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmluZGVudHtcclxuICAgIHRleHQtaW5kZW50OiAyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-achievements',
                templateUrl: './achievements.component.html',
                styleUrls: ['./achievements.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");













class AppComponent {
    constructor(changeDetectorRef, media, iconRegistry, sanitizer) {
        this.title = 'arindamdeyinfo';
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/thumbup-icon.svg'))
            .addSvgIcon('arrow_right', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/arrow_right-24px.svg'))
            .addSvgIcon('spirit', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/mood-24px.svg'))
            .addSvgIcon('numerology', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/fingerprint-24px.svg'))
            .addSvgIcon('chakras', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/all_inclusive-24px.svg'))
            .addSvgIcon('rudraksh', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/star-24px.svg'))
            .addSvgIcon('chat', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/chat-24px.svg'));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 7, consts: [[1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container", 3, "backdropClick"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport", "keydown.escape"], ["snav", ""], ["mat-menu-item", "", "routerLink", "", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/chat", "routerLinkActive", "active"], ["svgIcon", "chat"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], ["svgIcon", "spirit"], ["svgIcon", "arrow_right"], ["mat-menu-item", "", "routerLink", "/interview", "routerLinkActive", "active"], ["svgIcon", "thumbs-up"], ["rootMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/numerology", "routerLinkActive", "active"], ["svgIcon", "numerology"], [1, "col-xs-12", "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Arindam Dey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function AppComponent_Template_mat_sidenav_keydown_escape_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Partha Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Spiritual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Numerology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-aboutme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["AboutmeComponent"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    \r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  .example-sidenav-container[_ngcontent-%COMP%] {\r\n    \r\n    flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\r\n    \r\n    flex: 1 0 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "TIVG":
/*!**********************************************************!*\
  !*** ./src/app/spiritual/rudraksh/rudraksh.component.ts ***!
  \**********************************************************/
/*! exports provided: RudrakshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RudrakshComponent", function() { return RudrakshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RudrakshComponent {
    constructor() { }
    ngOnInit() {
    }
}
RudrakshComponent.ɵfac = function RudrakshComponent_Factory(t) { return new (t || RudrakshComponent)(); };
RudrakshComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RudrakshComponent, selectors: [["app-rudraksh"]], decls: 2, vars: 0, template: function RudrakshComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rudraksh works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaXJpdHVhbC9ydWRyYWtzaC9ydWRyYWtzaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RudrakshComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rudraksh',
                templateUrl: './rudraksh.component.html',
                styleUrls: ['./rudraksh.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _resume_header_header_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./resume/header/header.component */ "hcFL");
/* harmony import */ var _resume_profileshowcase_profileshowcase_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./resume/profileshowcase/profileshowcase.component */ "lyQU");
/* harmony import */ var _resume_profilesummary_profilesummary_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./resume/profilesummary/profilesummary.component */ "lyIa");
/* harmony import */ var _resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./resume/experience/experience.component */ "aAxc");
/* harmony import */ var _resume_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./resume/achievements/achievements.component */ "SXTQ");
/* harmony import */ var _resume_education_education_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./resume/education/education.component */ "sMZx");
/* harmony import */ var _resume_certification_certification_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./resume/certification/certification.component */ "0nxp");
/* harmony import */ var _resume_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./resume/techskills/techskills.component */ "grwu");
/* harmony import */ var _resume_coderepositories_coderepositories_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./resume/coderepositories/coderepositories.component */ "fV0J");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _resume_certheader_certheader_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./resume/certheader/certheader.component */ "04Iq");
/* harmony import */ var _resume_careerobjective_careerobjective_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./resume/careerobjective/careerobjective.component */ "tzWK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./interview/interview.component */ "0o0m");
/* harmony import */ var _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./spiritual/spiritual.component */ "a0Fr");
/* harmony import */ var _spiritual_rudraksh_rudraksh_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./spiritual/rudraksh/rudraksh.component */ "TIVG");
/* harmony import */ var _spiritual_chakras_chakras_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./spiritual/chakras/chakras.component */ "ZY2o");
/* harmony import */ var _spiritual_numerology_numerology_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./spiritual/numerology/numerology.component */ "Pkt7");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "sG/L");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");







































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_48__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_47__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__["BrowserAnimationsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_48__["AppComponent"],
        _resume_header_header_component__WEBPACK_IMPORTED_MODULE_49__["HeaderComponent"],
        _resume_profileshowcase_profileshowcase_component__WEBPACK_IMPORTED_MODULE_50__["ProfileshowcaseComponent"],
        _resume_profilesummary_profilesummary_component__WEBPACK_IMPORTED_MODULE_51__["ProfilesummaryComponent"],
        _resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_52__["ExperienceComponent"],
        _resume_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_53__["AchievementsComponent"],
        _resume_education_education_component__WEBPACK_IMPORTED_MODULE_54__["EducationComponent"],
        _resume_certification_certification_component__WEBPACK_IMPORTED_MODULE_55__["CertificationComponent"],
        _resume_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_56__["TechskillsComponent"],
        _resume_coderepositories_coderepositories_component__WEBPACK_IMPORTED_MODULE_57__["CoderepositoriesComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_58__["AboutmeComponent"],
        _resume_certheader_certheader_component__WEBPACK_IMPORTED_MODULE_59__["CertheaderComponent"],
        _resume_careerobjective_careerobjective_component__WEBPACK_IMPORTED_MODULE_60__["CareerobjectiveComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_62__["ResumeComponent"],
        _interview_interview_component__WEBPACK_IMPORTED_MODULE_63__["InterviewComponent"],
        _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_64__["SpiritualComponent"],
        _spiritual_chakras_chakras_component__WEBPACK_IMPORTED_MODULE_66__["ChakrasComponent"],
        _spiritual_numerology_numerology_component__WEBPACK_IMPORTED_MODULE_67__["NumerologyComponent"],
        _spiritual_rudraksh_rudraksh_component__WEBPACK_IMPORTED_MODULE_65__["RudrakshComponent"],
        _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_68__["PagenotfoundComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_69__["ChatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_47__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__["BrowserAnimationsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_48__["AppComponent"],
                    _resume_header_header_component__WEBPACK_IMPORTED_MODULE_49__["HeaderComponent"],
                    _resume_profileshowcase_profileshowcase_component__WEBPACK_IMPORTED_MODULE_50__["ProfileshowcaseComponent"],
                    _resume_profilesummary_profilesummary_component__WEBPACK_IMPORTED_MODULE_51__["ProfilesummaryComponent"],
                    _resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_52__["ExperienceComponent"],
                    _resume_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_53__["AchievementsComponent"],
                    _resume_education_education_component__WEBPACK_IMPORTED_MODULE_54__["EducationComponent"],
                    _resume_certification_certification_component__WEBPACK_IMPORTED_MODULE_55__["CertificationComponent"],
                    _resume_techskills_techskills_component__WEBPACK_IMPORTED_MODULE_56__["TechskillsComponent"],
                    _resume_coderepositories_coderepositories_component__WEBPACK_IMPORTED_MODULE_57__["CoderepositoriesComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_58__["AboutmeComponent"],
                    _resume_certheader_certheader_component__WEBPACK_IMPORTED_MODULE_59__["CertheaderComponent"],
                    _resume_careerobjective_careerobjective_component__WEBPACK_IMPORTED_MODULE_60__["CareerobjectiveComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_62__["ResumeComponent"],
                    _interview_interview_component__WEBPACK_IMPORTED_MODULE_63__["InterviewComponent"],
                    _spiritual_spiritual_component__WEBPACK_IMPORTED_MODULE_64__["SpiritualComponent"],
                    _spiritual_chakras_chakras_component__WEBPACK_IMPORTED_MODULE_66__["ChakrasComponent"],
                    _spiritual_numerology_numerology_component__WEBPACK_IMPORTED_MODULE_67__["NumerologyComponent"],
                    _spiritual_rudraksh_rudraksh_component__WEBPACK_IMPORTED_MODULE_65__["RudrakshComponent"],
                    _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_68__["PagenotfoundComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_69__["ChatComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_47__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__["BrowserAnimationsModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_48__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZY2o":
/*!********************************************************!*\
  !*** ./src/app/spiritual/chakras/chakras.component.ts ***!
  \********************************************************/
/*! exports provided: ChakrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChakrasComponent", function() { return ChakrasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ChakrasComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChakrasComponent.ɵfac = function ChakrasComponent_Factory(t) { return new (t || ChakrasComponent)(); };
ChakrasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChakrasComponent, selectors: [["app-chakras"]], decls: 2, vars: 0, template: function ChakrasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chakras works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaXJpdHVhbC9jaGFrcmFzL2NoYWtyYXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChakrasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chakras',
                templateUrl: './chakras.component.html',
                styleUrls: ['./chakras.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "a0Fr":
/*!**************************************************!*\
  !*** ./src/app/spiritual/spiritual.component.ts ***!
  \**************************************************/
/*! exports provided: SpiritualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiritualComponent", function() { return SpiritualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpiritualComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpiritualComponent.ɵfac = function SpiritualComponent_Factory(t) { return new (t || SpiritualComponent)(); };
SpiritualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpiritualComponent, selectors: [["app-spiritual"]], decls: 2, vars: 0, template: function SpiritualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "spiritual works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaXJpdHVhbC9zcGlyaXR1YWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpiritualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spiritual',
                templateUrl: './spiritual.component.html',
                styleUrls: ['./spiritual.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aAxc":
/*!***********************************************************!*\
  !*** ./src/app/resume/experience/experience.component.ts ***!
  \***********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");








function ExperienceComponent_mat_card_actions_10_div_18_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r6);
} }
function ExperienceComponent_mat_card_actions_10_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Client: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Period: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Domain: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TeamSize: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Skills: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Summary: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Roles: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ExperienceComponent_mat_card_actions_10_div_18_div_37_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r4.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", project_r4.devType, " - ", project_r4.deliveryMethod, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.teamSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r4.roles);
} }
const _c0 = function (a0) { return { hideChildren: a0 }; };
function ExperienceComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_mat_card_actions_10_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r2.class = _r2.class == "showChildren" ? "" : "showChildren"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExperienceComponent_mat_card_actions_10_div_18_Template, 39, 11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("At ", item_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("As ", item_r1.designation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r2.class !== "showChildren"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.projects);
} }
;
class ExperienceComponent {
    constructor(iconRegistry, sanitizer) {
        this.experiences = [
            {
                name: "Dell Product Inc. payroll of Capgemini",
                imagePath: "assets/img/companylogo/dell.png",
                desc: "Client Onsite within India",
                location: "Bangalore",
                designation: "Principle Software Engineer",
                span: "11th Oct’19 - 15th April 2020",
                projects: [{
                        client: "Dell Product Inc.",
                        imagePath: "assets/img/companylogo/dell.png",
                        summary: "The project is about revamping and redesigning several legacy applications, used by Dell vendors agents, into a cloud resilient architecture and correct design pattern",
                        domain: "Vendor Sales, Electronics",
                        span: "Oct’19 - April’20",
                        name: "Sales Vendor Framework",
                        teamSize: "10",
                        deliveryMethod: "Agile Scrum with Kanban, XP and SAFe [Scaled Agile Framework for enterprise]",
                        devType: "Scratch Development",
                        skills: "ASP.NET, MVC Core 3.0, Pivotal Cloud, Amazon Cloud [AWS], Microservice, Azure Cloud, Docker, RabbitMq, Redis, jQuery, React, Mongo Db, Azure Hosted DB, Splunk, MVC Core abstract logging framework and Serilog, Client-Side login With JSNLog and MongoDB, Request process and action component written in Python",
                        roles: [
                            "•	Operating Agile Coach & Scrum Master, Application Architect and Integration Architect and as a Solution Architect",
                            "•	Leading Scaled Agile Framework implementation at an enterprise level",
                            "•	Imparting training reading Scrum with Kanban and SAFe on Agile at account level",
                            "•	Leading and managing the project with a team of 10 people"
                        ]
                    }]
            },
            {
                name: "HP R & D payroll of Wipro",
                imagePath: "assets/img/companylogo/hp.png",
                desc: "Client Onsite within India",
                location: "Bangalore",
                designation: "Project Lead",
                span: "20th May’19 – 9th Oct’19",
                projects: [{
                        client: "HP R & D",
                        imagePath: "assets/img/companylogo/hp.png",
                        summary: "The	 project is about migrating applications, used by HP Ink agents and customers, into AWS cloud resiliency with proper architecture and design",
                        domain: "Printer & Elctronics",
                        span: "May’19 – Oct’19",
                        name: "Contractual Framework",
                        teamSize: "7",
                        deliveryMethod: "Agile Scrum and SAFe [Scaled Agile Framework for enterprise]",
                        devType: "Scratch Development",
                        skills: "ASP.NET, MVC Core 2, Amazon Cloud [AWS], jQuery, Angular, Mongo Db",
                        roles: [
                            "•	Operating as Project Manager, Application Architect and Integration Architect and as an Associate Solution Architect",
                            "•	Leading Scaled Agile Framework implementation at enterprise level for newly grown account",
                            "•	Imparting training reading Scrum and SAFe on Agile at account level",
                            "•	Leading and managing the project with a team of 7 people as Project Manager"
                        ]
                    }]
            },
            {
                name: "Accenture Technology Solutions",
                imagePath: "assets/img/companylogo/accenture.png",
                desc: "",
                location: "Bangalore",
                designation: "Software Engineer Senior Analyst",
                span: "28th Feb’15 – 1st May’19",
                projects: [
                    {
                        client: "Accenture",
                        imagePath: "assets/img/companylogo/accenture.png",
                        summary: "The project was about self-service website creation & deployment for Client Sales Agent. It managed entire request lifecycle of the Client Business follow-up and win customer. We have designed Cloud Native microservices using Azure.",
                        domain: "Customer Sales [Pre Sales & Post Sales]",
                        span: "Jul’18 – May’ 19",
                        name: "myConcerto – Sales Platform [Automation Platform]",
                        teamSize: "10",
                        deliveryMethod: "Agile Scrum and SAFe [Scaled Agile Framework for enterprise]",
                        devType: "Scratch Development",
                        skills: "ASP.NET, MVC Core 2.1.2, jQuery, Angular, Mongo Db, Azure Hosted DB, Splunk, MVC Core abstract logging framework and Serilog, Client-Side login With JSNLog and MongoDB, Request process and action component written in Python",
                        roles: [
                            "•	Cloud Architect",
                            "•	Agile Project Manager, Agile Coach & Scrum Master",
                            "•	Implementing Scaled Agile Framework at enterprise level for whole 800+ member account",
                            "•	Imparting training reading Scrum and SAFe on Agile at account level",
                            "•	Leading and managing the project with a team of 10 people as Agile Project Manager"
                        ]
                    },
                    {
                        client: "Frontier Communications[Internet Service Provider in USA]",
                        imagePath: "assets/img/companylogo/frontier.png",
                        summary: "The project entailed chain of application being migrated into new WEB API Manager Microservices",
                        domain: "Telecommunication",
                        span: "Sep’17 - Jun’18",
                        name: "Frontier Communications",
                        teamSize: "5",
                        deliveryMethod: "Agile Scrum",
                        devType: "Scratch Development",
                        skills: ".NET Framework 5, MVC 5.0, C#, WEB API 2, Microservices Architecture, SQL Server 2014",
                        roles: [
                            "•	Operated as Scrum Master and headed a team of 5 people as Offshore Lead",
                            "•	Played service-oriented architect role with Onshore Senior Manager as Chief Architect",
                            "•	Facilitated design and architecture of manager level application",
                            "•	Maintained & delivered all the technical documents as a part of delivery in absence of whole application wiki"
                        ]
                    },
                    {
                        client: "Accenture Product Consumed by big clients all over the world for sales & distributor management e.g. Nestle [Foodchain], PMI[TobaccoBrand], Unilever[Daily Consumer Goods chain], PepsiCo [Drinks Chain] & so on",
                        imagePath: "assets/img/companylogo/accenture.png",
                        summary: "The project aimed at enhancing and developing new modules of existing product Newspage",
                        domain: "FMCG & Retail",
                        span: "Sep’16 - Aug’17",
                        name: "Newspage",
                        teamSize: "9",
                        deliveryMethod: "Agile Scrum",
                        devType: "Scratch Development",
                        skills: ".NET Framework 5, MVC 5.0, C#, HTML, CSS, JQUERY (JavaScript Library), Angular Js, SQL Server 2014",
                        roles: [
                            "•	Managed a team of 9 people as Scrum Master",
                            "•	Acted as SME of existing tool enhancement and Member of application architecture team",
                            "•	Trained, guided and groomed the new joiners in the team"
                        ]
                    },
                    {
                        client: "Drugstore",
                        imagePath: "assets/img/companylogo/walgreens.png",
                        summary: "The project aimed to develop mobile application for all chain sites of Drugstore",
                        domain: "Retail",
                        span: "Nov'15 - Aug’16",
                        name: "Drugstore Mobile Site",
                        teamSize: "46",
                        deliveryMethod: "Agile Scrum",
                        devType: "Scratch Development",
                        skills: ".NET Framework 4.5, MVC 4.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), Oracle 10g, Richrelevance, Hooklogic, foresee third party, JavaScript, Plugins, Old Business Logic through C++, COM component, very loosely coupled architecture by Dependency Injection",
                        roles: [
                            "•	Monitored team of 5 people as an Application Architect and Scrum Master",
                            "•	Acted as SME of several internal tools and managed onsite offshore communication"
                        ]
                    },
                    {
                        client: "Telenor",
                        imagePath: "assets/img/companylogo/telenor.jpg",
                        summary: "The project aimed to integrate all the channels of sales marketing to new product structure. For that all existing 54 application will have a change. It was a very complex business to maintain",
                        domain: "Telecommunication",
                        span: "Feb’15 - Nov'15",
                        name: "Channel Integration",
                        teamSize: "8",
                        deliveryMethod: "Agile Kanban",
                        devType: "Scratch Development",
                        skills: ".NET Framework 4.5, MVC 4.0, C#, WCF, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), (JQGrid, jTemplate, AutoComplete, Form, UI Plug-in & so on) and BizTalk, SSRS, SQL Server 2012",
                        roles: [
                            "•	Worked as Member of Application Architecture and Business Overview team",
                            "•	Trained and groomed new joinees as the project was just in its design phase",
                            "•	Operated as a Product Owner of several applications with onsite offshore communication",
                            "•	Facilitated QA and code deployment for some applications"
                        ]
                    }
                ]
            },
            {
                name: "Cognizant Technologies Solutions",
                imagePath: "assets/img/companylogo/cognizant.png",
                desc: "",
                location: "Kolkata",
                designation: "Associate",
                span: "28th Oct’10 – 27th Feb’15",
                projects: [{
                        client: "Cambridge University",
                        imagePath: "assets/img/companylogo/cambridge.png",
                        summary: "The project aimed to develop A2C Transport & Messaging Sltn. It was basically a dashboard for all other existing and legacy applications of Cambridge University for exam centres",
                        domain: "Education & Publishing, Information Media & Entertainment",
                        span: "Apr’13 - Feb’15",
                        name: "A2C Transport & Messaging Sltn",
                        teamSize: "13",
                        deliveryMethod: "Agile Scrum",
                        devType: "Scratch Development",
                        skills: ".NET Framework 4.5, MVC 4.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), (JQGrid, jTemplate, AutoComplete, Form, UI Plug-in & so on) and BizTalk, SQL Server 2012",
                        roles: [
                            "•	Acted as Scrum Master and led a team of 10 people",
                            "•	Operated as a Member of Application Architecture Team and managed onsite offshore communication",
                            "•	Facilitated QA and code deployment for some applications"
                        ]
                    },
                    {
                        client: "Reology [TRGC (Title Resource Guaranty Company)-under TRG (Title Resource Group) Umbrella]",
                        imagePath: "assets/img/companylogo/reology.jpg",
                        summary: "TRUE application was Real Estate new generation underwriting software, useful for internal business users of TRGC for tracking new policy generation to claim, reinsurance, agent and premium for policy, accrual, reports & so on (Intranet Application)",
                        domain: "Real Estate",
                        span: "Oct'10 - Apr’13",
                        name: "Title Resources Underwriter Engine (TRUE)",
                        teamSize: "18",
                        deliveryMethod: "Agile Scrum and Extreme Programming",
                        devType: "Scratch Development",
                        skills: ".NET Framework 4.0, MVC 3.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), jTemplate, AutoComplete, Form, UI Plug-in and BizTalk, SQL Server 2005 & 2008",
                        roles: [
                            "•	Operated as junior member of application architecture team",
                            "•	Assigned and maintained SQA defects with integration of business-logics"
                        ]
                    }]
            }
        ];
        iconRegistry.addSvgIcon('option', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/more_vert-24px.svg'));
        iconRegistry.addSvgIcon('points', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/double_arrow-24px.svg'));
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"], ["alt", "", "height", "70", "width", "70", 1, "img-fluid", 3, "src"], [3, "ngClass", "click"], ["ele", ""], ["src", "_blank", 1, "linkit"], ["svgIcon", "option"], ["class", "children", 4, "ngFor", "ngForOf"], [1, "children"], ["svgIcon", "points"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Experiences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_mat_card_actions_10_Template, 20, 10, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\r\n.logowrap[_ngcontent-%COMP%]{\r\n    background-size: cover;    \r\n}\r\n.hideChildren[_ngcontent-%COMP%] > .children[_ngcontent-%COMP%]{\r\n    display: none;\r\n }\r\n.linkit[_ngcontent-%COMP%]{\r\n     color: blue;\r\n }\r\n.linkit[_ngcontent-%COMP%]:hover{\r\n    color:blue;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0NBQ2hCO0FBQ0E7S0FDSSxXQUFXO0NBQ2Y7QUFDQTtJQUNHLFVBQVU7SUFDVixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBIZWFkZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5sb2dvd3JhcHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxyXG59XHJcbi5oaWRlQ2hpbGRyZW4+LmNoaWxkcmVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5saW5raXR7XHJcbiAgICAgY29sb3I6IGJsdWU7XHJcbiB9XHJcbiAubGlua2l0OmhvdmVye1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "b2u2":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutmeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 15, vars: 0, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader", "rounded"], [1, "col-md-12", "col-xs-12", "col-lg-12", "align-middle"], [1, "col-md-3", "col-xs-3", "col-lg-3", "align-middle"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0536706150656!2d77.72339251482065!3d12.83980839094243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d75a4487607%3A0xc789a628428b3a36!2sShri%20Balaji%20Ocean!5e0!3m2!1sen!2sin!4v1584350132853!5m2!1sen!2sin", "width", "600", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date of Birth: 1st February, 1988");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Address: #108, Shri Balaji Ocean Naranghatta, Domsandra Chndapura Road, Off. Sarjapura Road Bangalore - 560100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgray;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcEhlYWRlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fV0J":
/*!***********************************************************************!*\
  !*** ./src/app/resume/coderepositories/coderepositories.component.ts ***!
  \***********************************************************************/
/*! exports provided: CoderepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoderepositoriesComponent", function() { return CoderepositoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CoderepositoriesComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.link);
} }
class CoderepositoriesComponent {
    constructor() {
        this.repos = [
            {
                desc: "Perfect design with Solid principle ",
                link: "https://github.com/arindamdeyofficial/S.O.L.I.D."
            },
            {
                desc: "Very Simple example of WebApi implementing Cloud Native Architecture having capability to handle 10000 concurrent user with degree of parallelism having capability of controlling Task adhering KISS and DRY architectural principles balancing seven architectural concerns giving priority to Performance and Scalability, Extensibility over others. Since Cloud native Availability also assured. Using SOLID, Saga, Aggregator Root [AR], CQRS[Command Query Responsibility Segregation], Repository, DI[Dependency Injection], IOC pattern using EntityFramework Core[Code first], Swagger, Automapper in ASP .Net Core 3.1",
                link: "https://github.com/arindamdeyofficial/ArchitecturalShowcase"
            }
        ];
    }
    ngOnInit() {
    }
}
CoderepositoriesComponent.ɵfac = function CoderepositoriesComponent_Factory(t) { return new (t || CoderepositoriesComponent)(); };
CoderepositoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoderepositoriesComponent, selectors: [["app-coderepositories"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"], [3, "href"]], template: function CoderepositoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Code Repositories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CoderepositoriesComponent_mat_card_actions_10_Template, 4, 3, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.repos);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2NvZGVyZXBvc2l0b3JpZXMvY29kZXJlcG9zaXRvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9jb2RlcmVwb3NpdG9yaWVzL2NvZGVyZXBvc2l0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wSGVhZGVye1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoderepositoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coderepositories',
                templateUrl: './coderepositories.component.html',
                styleUrls: ['./coderepositories.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "grwu":
/*!***********************************************************!*\
  !*** ./src/app/resume/techskills/techskills.component.ts ***!
  \***********************************************************/
/*! exports provided: TechskillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechskillsComponent", function() { return TechskillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TechskillsComponent_mat_list_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class TechskillsComponent {
    constructor() {
        this.techSkills = ["ASP.NET, MVC (Core 2.1.2), C#, HTML5, CSS3, Bootstrap, Web API, Jquery, WCF, Sql Server",
            "Microservice Architecture design from Monolithic",
            "Docker",
            "Spring Config",
            "RabbitMq Messaging queue with Docker for cloud resiliency",
            "Redis cache with docker",
            "Azure and Amazon Cloud [AWS]",
            "Structured data logger MVC Core abstract logging framework and Serilog",
            "Client-Side loging With JSNLog, Serilog and MongoDB integrated",
            "Git, Github, SVN, Bitbucket, TFS",
            "MOQ, MSTest/Visual Studio, NUnit",
            "Azure DevOps Automation",
            "AI with Python",
            "Data analytics using Splunk as a tool",
            "Specialty in Application and Integration Architecture",
            "Hands on Solution Architecture ",
            "Hands on Stakeholder Management, Requirement analysis and design",
            "Scrum, Kanban, Extreme Programming",
            "Hands on Stakeholder Management, Requirement analysis and design"
        ];
    }
    ngOnInit() {
    }
}
TechskillsComponent.ɵfac = function TechskillsComponent_Factory(t) { return new (t || TechskillsComponent)(); };
TechskillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechskillsComponent, selectors: [["app-techskills"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], ["dense", ""], [4, "ngFor", "ngForOf"]], template: function TechskillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Technical Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TechskillsComponent_mat_list_item_10_Template, 2, 1, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techSkills);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3RlY2hza2lsbHMvdGVjaHNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS90ZWNoc2tpbGxzL3RlY2hza2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wSGVhZGVye1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechskillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-techskills',
                templateUrl: './techskills.component.html',
                styleUrls: ['./techskills.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hcFL":
/*!***************************************************!*\
  !*** ./src/app/resume/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 0, vars: 0, template: function HeaderComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lyIa":
/*!*******************************************************************!*\
  !*** ./src/app/resume/profilesummary/profilesummary.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilesummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesummaryComponent", function() { return ProfilesummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");






function ProfilesummaryComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
function ProfilesummaryComponent_mat_list_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
class ProfilesummaryComponent {
    constructor() {
        this.areaOfExperties = [
            "Architecture and Cloud Architect",
            "Cloud Native & Resilient Design",
            "Azure DevOps, AI with Python",
            "Azure and Amazon Cloud",
            "Microservice from Monolithic",
            "Docker in Cloud Resilient",
            "Agile Project Management",
            "Agile SAFe Implementation ",
            "Product Roadmap Planning ",
            "Coaching & Facilitating ",
            "Agile Transformation",
            "Requirement Gathering ",
            "Backlog Grooming",
            "People Management"
        ];
        this.profileSummary = [
            "9.5 years of rich experience in Application designing of highly scalable systems using various Data Structures, SOLID principles, OOPs, TDD, BDD with exposure in requirement gathering, analysis and design	",
            "Specialized in breaking Monolithic application into cloud based stateful and stateless Microservices based on Twelve Factor App",
            "Designing Cloud Native, Ready and Resilient application architecture in Azure, AWS, Pivotal Cloud along with Docker implementation",
            "Experienced in event-based services using Azure Service Bus, Azure Message Queue, Amazon Simple Queue Service, RabbitMq etc.",
            "Optimizing web application performance Vertically using distributed Caching, Redis, NoSql Db, MongoDb, Azure Cosmos Db and Horizontally by Multithreading async await, code optimization",
            "Implemented market leading Serverless architecture through Push Notification, Service worker, SignalR, gRPC etc.",
            "Developed various stateful and stateless Rest APIs using ASP .Net Core 3.1",
            "Cross platform experience into setting up cloud CI CD automatic pipeline using Azure Devops",
            "ASP .Net Core 3.1, C#, HTML5, CSS3, Bootstrap, Web API, jQuery, Angular, WCF, Sql Server, MongoDB, MVC Core abstract logging framework and Serilog, JSNLog, RabbitMq, Redis, Docker ",
            "Mostly product platform and 8 MVC projects right from scratch",
            "Hands on in data processing with Python and build application AI, analyse & forecast client development as per business using Splunk as Automation tool ",
            "Experience of handling 2 teams of 10 member as Agile Project Manager in overall product roadmap by translating Agile roadmap into team specific PI planning and sprint planning",
            "Certified SAFe® Agilist / Agile Transformation Lead who has coached & mentored team members to develop agile capabilities self-organization ",
            "Supported Product Owner at client and organization to keep the backlog communicate updates communicate impediments and maintain release plan(s)",
            "Expertise in Agile Methodologies like Scrum, Kanban, Hybrid, Extreme Programming"
        ];
    }
    ngOnInit() {
    }
}
ProfilesummaryComponent.ɵfac = function ProfilesummaryComponent_Factory(t) { return new (t || ProfilesummaryComponent)(); };
ProfilesummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilesummaryComponent, selectors: [["app-profilesummary"]], decls: 19, vars: 2, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [1, "col-md-9", "col-xs-9", "col-lg-9"], [4, "ngFor", "ngForOf"], [1, "col-md-3", "col-xs-3", "col-lg-3"], ["dense", ""]], template: function ProfilesummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfilesummaryComponent_mat_card_actions_10_Template, 2, 1, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Area of Experties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfilesummaryComponent_mat_list_item_18_Template, 2, 1, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.areaOfExperties);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\r\n.expertiesHighlight[_ngcontent-%COMP%]{\r\n    border-color: blue;\r\n    border-style: none;\r\n    background-color: aliceblue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Byb2ZpbGVzdW1tYXJ5L3Byb2ZpbGVzdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9wcm9maWxlc3VtbWFyeS9wcm9maWxlc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBIZWFkZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5leHBlcnRpZXNIaWdobGlnaHR7XHJcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profilesummary',
                templateUrl: './profilesummary.component.html',
                styleUrls: ['./profilesummary.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lyQU":
/*!*********************************************************************!*\
  !*** ./src/app/resume/profileshowcase/profileshowcase.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileshowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileshowcaseComponent", function() { return ProfileshowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _careerobjective_careerobjective_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../careerobjective/careerobjective.component */ "tzWK");








class ProfileshowcaseComponent {
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
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[0]);
        iconRegistry.addSvgIcon('mobile', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/call-24px.svg'))
            .addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/email-24px.svg'))
            .addSvgIcon('resume', sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/cloud_download-24px.svg'));
    }
    ngOnInit() {
    }
}
ProfileshowcaseComponent.ɵfac = function ProfileshowcaseComponent_Factory(t) { return new (t || ProfileshowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
ProfileshowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileshowcaseComponent, selectors: [["app-profileshowcase"]], decls: 39, vars: 5, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [3, "expanded"], [1, "compHeader"], [1, "mat-title"], [1, "col-md-3", "col-xs-3", "col-lg-3", "backimagelogo"], ["alt", "Arindam Dey", "height", "250", "width", "250", 1, "img-fluid", 3, "src"], [1, "col-md-9", "col-xs-9", "col-lg-9"], [1, "backimagelogo"], [1, "col-md-4", "col-xs-4", "col-lg-4"], ["svgIcon", "email"], [1, "col-md-3", "col-xs-3", "col-lg-3"], ["svgIcon", "mobile"], [1, "col-md-5", "col-xs-5", "col-lg-5"], ["href", "assets/files/job/Resume_Arindam_9830609366.docx"], ["svgIcon", "resume"], ["href", "https://www.linkedin.com/in/arindamdeyjob/", "target", "_blank"], ["alt", "Arindam Dey", "height", "50", "width", "50", 1, "img-fluid", 3, "src"], ["href", "https://en.gravatar.com/arindamdeyjob", "target", "_blank"], ["href", "https://twitter.com/arindamdeyinfo", "target", "_blank"]], template: function ProfileshowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Arindam Dey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "arindamdeyjob@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+91 9830609366 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-careerobjective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.myPicPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.linkedinPicPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.gravatarPicPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.twitterPicPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _careerobjective_careerobjective_component__WEBPACK_IMPORTED_MODULE_6__["CareerobjectiveComponent"]], styles: [".backimagelogo[_ngcontent-%COMP%]{\r\n    background-size:cover; width:auto;\r\n    background-image:url('/assets/img/logo.png');    \r\n    background-position:50% 50%;\r\n  }\r\n  .backimagelogotag[_ngcontent-%COMP%]{\r\n    background-size:cover; width:auto;\r\n    background-image:url('/assets/img/logotag.png');    \r\n    background-position:50% 50%;\r\n  }\r\n  .backimagelogofull[_ngcontent-%COMP%]{\r\n    background-size:cover; width:auto;\r\n    background-image:url('/assets/img/LogoFull.png');    \r\n    background-position:50% 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Byb2ZpbGVzaG93Y2FzZS9wcm9maWxlc2hvd2Nhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQixFQUFFLFVBQVU7SUFDakMsNENBQTRDO0lBQzVDLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCLEVBQUUsVUFBVTtJQUNqQywrQ0FBK0M7SUFDL0MsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUIsRUFBRSxVQUFVO0lBQ2pDLGdEQUFnRDtJQUNoRCwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcHJvZmlsZXNob3djYXNlL3Byb2ZpbGVzaG93Y2FzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tpbWFnZWxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IHdpZHRoOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWcvbG9nby5wbmcnKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XHJcbiAgfVxyXG4gIC5iYWNraW1hZ2Vsb2dvdGFne1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB3aWR0aDphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy9hc3NldHMvaW1nL2xvZ290YWcucG5nJyk7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNTAlO1xyXG4gIH0gIFxyXG4gIC5iYWNraW1hZ2Vsb2dvZnVsbHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3Zlcjsgd2lkdGg6YXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltZy9Mb2dvRnVsbC5wbmcnKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileshowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profileshowcase',
                templateUrl: './profileshowcase.component.html',
                styleUrls: ['./profileshowcase.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "sG/L":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "error-template"], [1, "error-details"], [1, "error-actions"], ["href", "#", 1, "btn", "btn-primary", "btn-lg"], [1, "glyphicon", "glyphicon-home"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Oops!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 404 Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sorry, an error has occured, Requested page not found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Take Me Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sMZx":
/*!*********************************************************!*\
  !*** ./src/app/resume/education/education.component.ts ***!
  \*********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EducationComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.insName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("With ", item_r1.marks, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.span);
} }
class EducationComponent {
    constructor() {
        this.educations = [
            {
                name: "B.Tech in Electronics and Communication ( ECE )",
                imagePath: "assets/img/edu/wbut.png",
                insName: "Netaji Subhash Enginerring College under West Bengal University of Technology (WBUT)",
                marks: "7.83 DGPA i.e. 7.33 CGPA/73.3 %",
                span: "July 2006 - July 2010"
            },
            {
                name: "12th H.S. [Higher Secondary]",
                imagePath: "assets/img/edu/jv.png",
                insName: "Jadavpur Vidyapith",
                marks: "72.4%",
                span: "June 2003 –  June 2005"
            },
            {
                name: "10th [Secondary]",
                imagePath: "assets/img/edu/jv.png",
                insName: "Jadavpur Vidyapith",
                marks: "86.75%",
                span: "June 2001 –  June 2003"
            }
        ];
    }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-md-12", "col-xs-12", "col-lg-12"], [1, "compHeader"], [4, "ngFor", "ngForOf"], ["alt", "awsSolArchProf", "height", "70", "width", "70", 1, "img-fluid", 3, "src"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EducationComponent_mat_card_actions_10_Template, 12, 6, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"]], styles: [".compHeader[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n    text-align: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBIZWFkZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tzWK":
/*!*********************************************************************!*\
  !*** ./src/app/resume/careerobjective/careerobjective.component.ts ***!
  \*********************************************************************/
/*! exports provided: CareerobjectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerobjectiveComponent", function() { return CareerobjectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CareerobjectiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
CareerobjectiveComponent.ɵfac = function CareerobjectiveComponent_Factory(t) { return new (t || CareerobjectiveComponent)(); };
CareerobjectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareerobjectiveComponent, selectors: [["app-careerobjective"]], decls: 7, vars: 0, consts: [[1, "row", "objective"], [1, "col-md-12", "col-xs-12", "col-lg-12"]], template: function CareerobjectiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Certified Technology Architect Associate; supports Architectural Runway in Full SAFe by Application, Integration, Solution Architecting. Certified SAFe\u00AE Agilist, Advanced Professional Scrum Master1(PSM 1 & 2), Professional Scrum Product Owner (PSPO 1). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ASP .NET Core, MVC with additional skills like Microservice, Azure DevOps Automation setup, AI with Python, Data Analytics using Splunk. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seeking roles mainly in Cloud Architecture, Application, Solution Architecture, Angular, Azure, AWS, .NET Core, Microservice, MVC, Azure DevOps Automation setup, AI with Python, Data Analytics, Project Management, ScrumMaster Advanced, SAFe Agilist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".objective[_ngcontent-%COMP%]{\r\n    color: darkgrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL2NhcmVlcm9iamVjdGl2ZS9jYXJlZXJvYmplY3RpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvY2FyZWVyb2JqZWN0aXZlL2NhcmVlcm9iamVjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9iamVjdGl2ZXtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareerobjectiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-careerobjective',
                templateUrl: './careerobjective.component.html',
                styleUrls: ['./careerobjective.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "sG/L");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interview/interview.component */ "0o0m");
/* harmony import */ var _spiritual_rudraksh_rudraksh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spiritual/rudraksh/rudraksh.component */ "TIVG");
/* harmony import */ var _spiritual_chakras_chakras_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spiritual/chakras/chakras.component */ "ZY2o");
/* harmony import */ var _spiritual_numerology_numerology_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spiritual/numerology/numerology.component */ "Pkt7");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");











const routes = [
    { path: '', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"] },
    { path: 'interview', component: _interview_interview_component__WEBPACK_IMPORTED_MODULE_4__["InterviewComponent"] },
    { path: 'rudraksh', component: _spiritual_rudraksh_rudraksh_component__WEBPACK_IMPORTED_MODULE_5__["RudrakshComponent"] },
    { path: 'chakras', component: _spiritual_chakras_chakras_component__WEBPACK_IMPORTED_MODULE_6__["ChakrasComponent"] },
    { path: 'numerology', component: _spiritual_numerology_numerology_component__WEBPACK_IMPORTED_MODULE_7__["NumerologyComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false } // <-- debugging purposes only
            )
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false } // <-- debugging purposes only
                    )
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map