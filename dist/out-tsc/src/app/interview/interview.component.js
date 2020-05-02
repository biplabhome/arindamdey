import { __decorate } from "tslib";
import { Component } from '@angular/core';
let InterviewComponent = class InterviewComponent {
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
};
InterviewComponent = __decorate([
    Component({
        selector: 'app-interview',
        templateUrl: './interview.component.html',
        styleUrls: ['./interview.component.css']
    })
], InterviewComponent);
export { InterviewComponent };
//# sourceMappingURL=interview.component.js.map