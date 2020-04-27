import { Component, OnInit } from '@angular/core';
export interface numsys{
  l: string,
  n: number
}
@Component({
  selector: 'app-numerology',
  templateUrl: './numerology.component.html',
  styleUrls: ['./numerology.component.css']
})
export class NumerologyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedvalue:string = "";
  total:number =0;
  cheroNum: numsys[] = [
    {l:'a',n:1}, {l:'b',n:1}, {l:'c',n:1}, {l:'d',n:1}, {l:'e',n:1}, {l:'f',n:1}, {l:'g',n:1},
    {l:'h',n:1}, {l:'i',n:1}, {l:'j',n:1}, {l:'k',n:1}, {l:'l',n:1}, {l:'m',n:1}, {l:'n',n:1},
    {l:'o',n:1}, {l:'p',n:1}, {l:'q',n:1}, {l:'r',n:1}, {l:'s',n:1}, {l:'t',n:1}, {l:'u',n:1},
    {l:'v',n:1}, {l:'w',n:1}, {l:'x',n:1}, {l:'y',n:1}, {l:'z',n:1}
  ];
  newNum: numsys[] = [
    {l:'a',n:1}, {l:'b',n:1}, {l:'c',n:1}, {l:'d',n:1}, {l:'e',n:1}, {l:'f',n:1}, {l:'g',n:1},
    {l:'h',n:1}, {l:'i',n:1}, {l:'j',n:1}, {l:'k',n:1}, {l:'l',n:1}, {l:'m',n:1}, {l:'n',n:1},
    {l:'o',n:1}, {l:'p',n:1}, {l:'q',n:1}, {l:'r',n:1}, {l:'s',n:1}, {l:'t',n:1}, {l:'u',n:1},
    {l:'v',n:1}, {l:'w',n:1}, {l:'x',n:1}, {l:'y',n:1}, {l:'z',n:1}
  ];
  selectcalculate(boxval:string): void {
    
    this.selectedvalue += 1;
    }
}
