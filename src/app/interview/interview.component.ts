import { Component, OnInit } from '@angular/core';
export interface qs
{
  qs: string,
  ans: string
}
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})

export class InterviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  qsl: qs[] = [
    {
      qs:"Azure Reference Architechture",
      ans:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
    },
    {
      qs:"Azure Services",
      ans:"https://azure.microsoft.com/en-in/services/"
    }
  ];
}
