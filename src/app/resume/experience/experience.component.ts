import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

export interface proj{
  name:string,
  teamSize:string,
  deliveryMethod:string,
  devType:string,
  skills:string,
  roles:Array<string>,
  client:string,
  imagePath: string,
  summary: string,
  span: string,
  domain:string
};
export interface exp{
  name:string,
  imagePath: string,
  desc: string,
  location: string,
  designation:string,
  span: string,
  projects:Array<proj>
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'option',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/more_vert-24px.svg'))
    iconRegistry.addSvgIcon(
      'points',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/double_arrow-24px.svg'));
  }

  ngOnInit(): void {
  }
experiences: exp[]=[
  {
    name:"Dell Product Inc. payroll of Capgemini",
    imagePath:"assets/img/companylogo/dell.png",
    desc:"Client Onsite within India",
    location:"Bangalore",
    designation:"Principle Software Engineer",
    span:"11th Oct’19 - 15th April 2020",
    projects: [{
      client:"Dell Product Inc.",
      imagePath:"assets/img/companylogo/dell.png",
      summary:"The project is about revamping and redesigning several legacy applications, used by Dell vendors agents, into a cloud resilient architecture and correct design pattern",
      domain:"Vendor Sales, Electronics",
      span:"Oct’19 - April’20",
      name:"Sales Vendor Framework",
      teamSize:"10",
      deliveryMethod:"Agile Scrum with Kanban, XP and SAFe [Scaled Agile Framework for enterprise]",
      devType:"Scratch Development",
      skills:"ASP.NET, MVC Core 3.0, Pivotal Cloud, Amazon Cloud [AWS], Microservice, Azure Cloud, Docker, RabbitMq, Redis, jQuery, React, Mongo Db, Azure Hosted DB, Splunk, MVC Core abstract logging framework and Serilog, Client-Side login With JSNLog and MongoDB, Request process and action component written in Python",
      roles:[
        "•	Operating Agile Coach & Scrum Master, Application Architect and Integration Architect and as a Solution Architect", 
        "•	Leading Scaled Agile Framework implementation at an enterprise level",
        "•	Imparting training reading Scrum with Kanban and SAFe on Agile at account level",
        "•	Leading and managing the project with a team of 10 people"
      ]
    }]
  },
  {
    name:"HP R & D payroll of Wipro",
    imagePath:"assets/img/companylogo/hp.png",
    desc:"Client Onsite within India",
    location:"Bangalore",
    designation:"Project Lead",
    span:"20th May’19 – 9th Oct’19",
    projects: [{
      client:"HP R & D",
      imagePath:"assets/img/companylogo/hp.png",
      summary:"The	 project is about migrating applications, used by HP Ink agents and customers, into AWS cloud resiliency with proper architecture and design",
      domain:"Printer & Elctronics",
      span:"May’19 – Oct’19",
      name:"Contractual Framework",
      teamSize:"7",
      deliveryMethod:"Agile Scrum and SAFe [Scaled Agile Framework for enterprise]",
      devType:"Scratch Development",
      skills:"ASP.NET, MVC Core 2, Amazon Cloud [AWS], jQuery, Angular, Mongo Db",
      roles:[
        "•	Operating as Project Manager, Application Architect and Integration Architect and as an Associate Solution Architect", 
        "•	Leading Scaled Agile Framework implementation at enterprise level for newly grown account",
        "•	Imparting training reading Scrum and SAFe on Agile at account level",
        "•	Leading and managing the project with a team of 7 people as Project Manager"

      ]
    }]
  },
  {
    name:"Accenture Technology Solutions",
    imagePath:"assets/img/companylogo/accenture.png",
    desc:"",
    location:"Bangalore",
    designation:"Software Engineer Senior Analyst",
    span:"28th Feb’15 – 1st May’19",
    projects: [
      {
      client:"Accenture",
      imagePath:"assets/img/companylogo/accenture.png",
      summary:"The project was about self-service website creation & deployment for Client Sales Agent. It managed entire request lifecycle of the Client Business follow-up and win customer. We have designed Cloud Native microservices using Azure.",
      domain:"Customer Sales [Pre Sales & Post Sales]",
      span:"Jul’18 – May’ 19",
      name:"myConcerto – Sales Platform [Automation Platform]",
      teamSize:"10",
      deliveryMethod:"Agile Scrum and SAFe [Scaled Agile Framework for enterprise]",
      devType:"Scratch Development",
      skills:"ASP.NET, MVC Core 2.1.2, jQuery, Angular, Mongo Db, Azure Hosted DB, Splunk, MVC Core abstract logging framework and Serilog, Client-Side login With JSNLog and MongoDB, Request process and action component written in Python",
      roles:[
        "•	Cloud Architect",
        "•	Agile Project Manager, Agile Coach & Scrum Master",
        "•	Implementing Scaled Agile Framework at enterprise level for whole 800+ member account",
        "•	Imparting training reading Scrum and SAFe on Agile at account level",
        "•	Leading and managing the project with a team of 10 people as Agile Project Manager"
      ]
    },
    {
      client:"Frontier Communications[Internet Service Provider in USA]",
      imagePath:"assets/img/companylogo/frontier.png",
      summary:"The project entailed chain of application being migrated into new WEB API Manager Microservices",
      domain:"Telecommunication",
      span:"Sep’17 - Jun’18",
      name:"Frontier Communications",
      teamSize:"5",
      deliveryMethod:"Agile Scrum",
      devType:"Scratch Development",
      skills:".NET Framework 5, MVC 5.0, C#, WEB API 2, Microservices Architecture, SQL Server 2014",
      roles:[
        "•	Operated as Scrum Master and headed a team of 5 people as Offshore Lead",
        "•	Played service-oriented architect role with Onshore Senior Manager as Chief Architect",
        "•	Facilitated design and architecture of manager level application",
        "•	Maintained & delivered all the technical documents as a part of delivery in absence of whole application wiki" 
      ]
    },
    {
      client:"Accenture Product Consumed by big clients all over the world for sales & distributor management e.g. Nestle [Foodchain], PMI[TobaccoBrand], Unilever[Daily Consumer Goods chain], PepsiCo [Drinks Chain] & so on",
      imagePath:"assets/img/companylogo/accenture.png",
      summary:"The project aimed at enhancing and developing new modules of existing product Newspage",
      domain:"FMCG & Retail",
      span:"Sep’16 - Aug’17",
      name:"Newspage",
      teamSize:"9",
      deliveryMethod:"Agile Scrum",
      devType:"Scratch Development",
      skills:".NET Framework 5, MVC 5.0, C#, HTML, CSS, JQUERY (JavaScript Library), Angular Js, SQL Server 2014",
      roles:[
        "•	Managed a team of 9 people as Scrum Master",
        "•	Acted as SME of existing tool enhancement and Member of application architecture team",
        "•	Trained, guided and groomed the new joiners in the team"
      ]
    },
    {
      client:"Drugstore",
      imagePath:"assets/img/companylogo/walgreens.png",
      summary:"The project aimed to develop mobile application for all chain sites of Drugstore",
      domain:"Retail",
      span:"Nov'15 - Aug’16",
      name:"Drugstore Mobile Site",
      teamSize:"46",
      deliveryMethod:"Agile Scrum",
      devType:"Scratch Development",
      skills:".NET Framework 4.5, MVC 4.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), Oracle 10g, Richrelevance, Hooklogic, foresee third party, JavaScript, Plugins, Old Business Logic through C++, COM component, very loosely coupled architecture by Dependency Injection",
      roles:[
        "•	Monitored team of 5 people as an Application Architect and Scrum Master",
        "•	Acted as SME of several internal tools and managed onsite offshore communication"
      ]
    },
    {
      client:"Telenor",
      imagePath:"assets/img/companylogo/telenor.jpg",
      summary:"The project aimed to integrate all the channels of sales marketing to new product structure. For that all existing 54 application will have a change. It was a very complex business to maintain",
      domain:"Telecommunication",
      span:"Feb’15 - Nov'15",
      name:"Channel Integration",
      teamSize:"8",
      deliveryMethod:"Agile Kanban",
      devType:"Scratch Development",
      skills:".NET Framework 4.5, MVC 4.0, C#, WCF, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), (JQGrid, jTemplate, AutoComplete, Form, UI Plug-in & so on) and BizTalk, SSRS, SQL Server 2012",
      roles:[
        "•	Worked as Member of Application Architecture and Business Overview team",
        "•	Trained and groomed new joinees as the project was just in its design phase",
        "•	Operated as a Product Owner of several applications with onsite offshore communication",
        "•	Facilitated QA and code deployment for some applications"
      ]
    }]
  },
  {
    name:"Cognizant Technologies Solutions",
    imagePath:"assets/img/companylogo/cognizant.png",
    desc:"",
    location:"Kolkata",
    designation:"Associate",
    span:"28th Oct’10 – 27th Feb’15",
    projects: [{
      client:"Cambridge University",
      imagePath:"assets/img/companylogo/cambridge.png",
      summary:"The project aimed to develop A2C Transport & Messaging Sltn. It was basically a dashboard for all other existing and legacy applications of Cambridge University for exam centres",
      domain:"Education & Publishing, Information Media & Entertainment",
      span:"Apr’13 - Feb’15",
      name:"A2C Transport & Messaging Sltn",
      teamSize:"13",
      deliveryMethod:"Agile Scrum",
      devType:"Scratch Development",
      skills:".NET Framework 4.5, MVC 4.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), (JQGrid, jTemplate, AutoComplete, Form, UI Plug-in & so on) and BizTalk, SQL Server 2012",
      roles:[
        "•	Acted as Scrum Master and led a team of 10 people",
        "•	Operated as a Member of Application Architecture Team and managed onsite offshore communication",
        "•	Facilitated QA and code deployment for some applications"
      ]
    },
    {
      client:"Reology [TRGC (Title Resource Guaranty Company)-under TRG (Title Resource Group) Umbrella]",
      imagePath:"assets/img/companylogo/reology.jpg",
      summary:"TRUE application was Real Estate new generation underwriting software, useful for internal business users of TRGC for tracking new policy generation to claim, reinsurance, agent and premium for policy, accrual, reports & so on (Intranet Application)",
      domain:"Real Estate",
      span:"Oct'10 - Apr’13",
      name:"Title Resources Underwriter Engine (TRUE)",
      teamSize:"18",
      deliveryMethod:"Agile Scrum and Extreme Programming",
      devType:"Scratch Development",
      skills:".NET Framework 4.0, MVC 3.0, C#, HTML, JavaScript, AJAX, CSS, JQUERY (JavaScript Library), jTemplate, AutoComplete, Form, UI Plug-in and BizTalk, SQL Server 2005 & 2008",
      roles:[
        "•	Operated as junior member of application architecture team",
        "•	Assigned and maintained SQA defects with integration of business-logics"
      ]
    }]
  }
  ];
}
