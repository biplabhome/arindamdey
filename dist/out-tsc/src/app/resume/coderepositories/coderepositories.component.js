import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CoderepositoriesComponent = class CoderepositoriesComponent {
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
};
CoderepositoriesComponent = __decorate([
    Component({
        selector: 'app-coderepositories',
        templateUrl: './coderepositories.component.html',
        styleUrls: ['./coderepositories.component.css']
    })
], CoderepositoriesComponent);
export { CoderepositoriesComponent };
//# sourceMappingURL=coderepositories.component.js.map