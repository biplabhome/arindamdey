import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NumerologyComponent = class NumerologyComponent {
    constructor() {
        this.totalChero = 0;
        this.totalNew = 0;
        this.cheroNum = [
            { l: 'a', n: 1 }, { l: 'b', n: 1 }, { l: 'c', n: 1 }, { l: 'd', n: 1 }, { l: 'e', n: 1 }, { l: 'f', n: 1 }, { l: 'g', n: 1 },
            { l: 'h', n: 1 }, { l: 'i', n: 1 }, { l: 'j', n: 1 }, { l: 'k', n: 1 }, { l: 'l', n: 1 }, { l: 'm', n: 1 }, { l: 'n', n: 1 },
            { l: 'o', n: 1 }, { l: 'p', n: 1 }, { l: 'q', n: 1 }, { l: 'r', n: 1 }, { l: 's', n: 1 }, { l: 't', n: 1 }, { l: 'u', n: 1 },
            { l: 'v', n: 1 }, { l: 'w', n: 1 }, { l: 'x', n: 1 }, { l: 'y', n: 1 }, { l: 'z', n: 1 }
        ];
        this.newNum = [
            { l: 'a', n: 1 }, { l: 'b', n: 1 }, { l: 'c', n: 1 }, { l: 'd', n: 1 }, { l: 'e', n: 1 }, { l: 'f', n: 1 }, { l: 'g', n: 1 },
            { l: 'h', n: 1 }, { l: 'i', n: 1 }, { l: 'j', n: 1 }, { l: 'k', n: 1 }, { l: 'l', n: 1 }, { l: 'm', n: 1 }, { l: 'n', n: 1 },
            { l: 'o', n: 1 }, { l: 'p', n: 1 }, { l: 'q', n: 1 }, { l: 'r', n: 1 }, { l: 's', n: 1 }, { l: 't', n: 1 }, { l: 'u', n: 1 },
            { l: 'v', n: 1 }, { l: 'w', n: 1 }, { l: 'x', n: 1 }, { l: 'y', n: 1 }, { l: 'z', n: 1 }
        ];
    }
    ngOnInit() {
    }
    selectcalculate(event) {
        var v = event.target.value.toLowerCase();
        for (var i = 0; v.Length; i++) {
            var parent = this;
            this.cheroNum.find(function (element) {
                if (element.l == v[i]) {
                    parent.totalChero += element.n;
                }
            });
            this.newNum.find(function (element) {
                if (element.l == v[i]) {
                    parent.totalNew += element.n;
                }
            });
        }
    }
};
NumerologyComponent = __decorate([
    Component({
        selector: 'app-numerology',
        templateUrl: './numerology.component.html',
        styleUrls: ['./numerology.component.css']
    })
], NumerologyComponent);
export { NumerologyComponent };
//# sourceMappingURL=numerology.component.js.map