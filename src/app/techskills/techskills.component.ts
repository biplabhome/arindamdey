import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.css']
})
export class TechskillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
techSkills = ["ASP.NET, MVC (Core 2.1.2), C#, HTML5, CSS3, Bootstrap, Web API, Jquery, WCF, Sql Server",
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
