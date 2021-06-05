import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResumeComponent } from './resume/resume.component';
import { InterviewComponent } from './interview/interview.component';
import { RudrakshComponent } from './spiritual/rudraksh/rudraksh.component';
import { ChakrasComponent } from './spiritual/chakras/chakras.component';
import { NumerologyComponent } from './spiritual/numerology/numerology.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },   
  { path: 'resume', component: ResumeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'rudraksh', component: RudrakshComponent },
  { path: 'chakras', component: ChakrasComponent },
  { path: 'numerology', component: NumerologyComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false, relativeLinkResolution: 'legacy' } // <-- debugging purposes only
 // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
