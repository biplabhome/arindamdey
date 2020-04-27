import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
experiences: exp[]=[
  {
    name:"Dell Product Inc. payroll of Capgemini",
    imagePath:"assets/img/capgemini.png",
    desc:"Client Onsite within India",
    location:"Bangalore",
    designation:"Principle Software Engineer",
    span:"11th Oct’19 - 15th April 2020",
    projects: [{
      client:"Dell Product Inc.",
      imagePath:"assets/img/dell.png",
      summary:"Client Onsite within India",
      domain:"Elctronics",
      span:"Oct’19 - April’20",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    }]
  },
  {
    name:"HP R & D payroll of Wipro",
    imagePath:"assets/img/hp.png",
    desc:"Client Onsite within India",
    location:"Bangalore",
    designation:"Project Lead",
    span:"20th May’19 – 9th Oct’19",
    projects: [{
      client:"HP R & D",
      imagePath:"assets/img/hp.png",
      summary:"Client Onsite within India",
      domain:"Printer & Elctronics",
      span:"May’19 – Oct’19",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    }]
  },
  {
    name:"Accenture Technology Solutions",
    imagePath:"assets/img/accenture.jpg",
    desc:"",
    location:"Bangalore",
    designation:"Software Engineer Senior Analyst",
    span:"28th Feb’15 – 1st May’19",
    projects: [
      {
      client:"Accenture",
      imagePath:"assets/img/accenture.jpg",
      summary:"Sales  Framework Product Platform as a part of https://myConcerto.accenture.com",
      domain:"Customer & Sales",
      span:"Jul’18 – May’ 19",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    },
    {
      client:"Frontier Communications",
      imagePath:"assets/img/frontier.png",
      summary:"ISP Broadband Provider",
      domain:"Telecommunication",
      span:"Sep’17 - Jun’18",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    },
    {
      client:"Newspage",
      imagePath:"assets/img/accenture.jpg",
      summary:"product consumed by companies namely Nestle, PMI, Unilever, PepsiCo",
      domain:"FMCG & Retail",
      span:"Sep’16 - Aug’17",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    },
    {
      client:"Drugstore and Walgreens chain of Business",
      imagePath:"assets/img/walgreens.png",
      summary:"",
      domain:"Retail",
      span:"Nov'15 - Aug’16",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    },
    {
      client:"Telenor",
      imagePath:"assets/img/telenor.jpg",
      summary:"",
      domain:"Telecom",
      span:"Feb’15 - Nov'15",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    }]
  },
  {
    name:"Cognizant Technologies Solutions",
    imagePath:"assets/img/cognizant.png",
    desc:"",
    location:"Kolkata",
    designation:"Associate",
    span:"28th Oct’10 – 27th Feb’15",
    projects: [{
      client:"Cambridge University",
      imagePath:"assets/img/cambridge.png",
      summary:"Information Media and Entertainment Vertical",
      domain:"Education & Publishing",
      span:"Apr’13 - Feb’15",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    },
    {
      client:"Reology",
      imagePath:"assets/img/reology.jpg",
      summary:"No. 2 Real Estate Company in USA), Travel & Hospitality Vertical",
      domain:"Real Estate",
      span:"Oct'10 - Apr’13",
      name:"",
      teamSize:"",
      deliveryMethod:"",
      devType:"",
      skills:"",
      roles:[]
    }]
  }
  ];
}
