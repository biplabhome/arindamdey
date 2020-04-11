import { Component, OnInit } from '@angular/core';
export interface awards{
  keyPoint: string,
  awardList: Array<string>
}
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
acomplishment: awards[]= [
  { 
    keyPoint: "Acknowledged in ACE Award, a milestone in Accenture in Apr’17, which is a achievement award for a location among all the accounts and project for zero defect, zero escalation and outstanding team performance",
    awardList:[]
  },
  { 
    keyPoint: "Bagged Recognition Points Programme several times for outstanding delivery skill",
    awardList:[]
  },
  { 
    keyPoint: "Won:",
    awardList:[
      "Delivery Excellence Award from client in 2014",
      "Star of the Mobile Release and Delivery Excellence Recognition in Jan’16 ",
      "Innovation Champion of the Account in 2013"
    ]
  },
  { 
    keyPoint: "Increased First Time Right (FTR) measures to 80% and reduced Cycle Time (CT) by 40% with decreased Lead time; delivered using the Agile SAFe methodologies",
    awardList:[]
  },
  { 
    keyPoint: "Coordinated multiple medium and small sized projects for SAP as a part of Intelligence Platform serving 100+ client AI and automation through a single platform in a mature onshore/offshore model",
    awardList:[]
  },
  { 
    keyPoint: "Recovered a project in trouble as Customer Facing Delivery Manager through measures such as Responsiveness, Architectural corrections, automated white box testing with Veracode in Frontier",
    awardList:[]
  },
  { 
    keyPoint: "Mentored and coached the project team on areas such as implementation of pure Scrum and Agile transformation; planned and integrated the work of multiple teams on a project; provided input on team performance and rewar",
    awardList:[]
  },];
}
