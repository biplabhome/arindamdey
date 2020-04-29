import { Component, OnInit } from '@angular/core';
export interface certs{
  name: string,
  desc:string,
  image:string
}
@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
certDetails: certs[] = [
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
