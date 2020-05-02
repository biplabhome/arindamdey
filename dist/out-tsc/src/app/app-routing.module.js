import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResumeComponent } from './resume/resume.component';
import { InterviewComponent } from './interview/interview.component';
import { RudrakshComponent } from './spiritual/rudraksh/rudraksh.component';
import { ChakrasComponent } from './spiritual/chakras/chakras.component';
import { NumerologyComponent } from './spiritual/numerology/numerology.component';
const routes = [
    { path: '', component: ResumeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'interview', component: InterviewComponent },
    { path: 'rudraksh', component: RudrakshComponent },
    { path: 'chakras', component: ChakrasComponent },
    { path: 'numerology', component: NumerologyComponent },
    { path: '**', component: PagenotfoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map