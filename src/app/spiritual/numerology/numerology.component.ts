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
  totalChero:number =0;
  totalNew:number =0;
  cheroNum: numsys[] = [
    {l:'',n:0}, {l:'aijqy',n:1}, {l:'bkr',n:2}, {l:'cgls',n:3}, {l:'dmt',n:4}, {l:'ehnx',n:5}, {l:'uvw',n:6},
    {l:'oz',n:7}, {l:'fp',n:8}, {l:'',n:9}
  ];
  newNum: numsys[] = [
    {l:'',n:0}, {l:'aijqy',n:1}, {l:'bkr',n:2}, {l:'cgls',n:3}, {l:'dmt',n:4}, {l:'ehnx',n:5}, {l:'uvw',n:6},
    {l:'oz',n:7}, {l:'fp',n:8}, {l:'',n:9}
  ];
  selectcalculate(event: any): void {
    var v = event.target.value.toLowerCase();
    this.totalNew = 0;
    this.totalChero = 0;
    for(var i=0;i< v.length;i++)
    {
      var parent = this;
      this.cheroNum.find(function(element) { 
        if(element.l.indexOf(v[i]) != -1){
          parent.totalChero += element.n;
        }
      });
      this.newNum.find(function(element) { 
        if(element.l.indexOf(v[i]) != -1){
          parent.totalNew += element.n;
        }
      });
    }
    this.totalChero = this.numberSingleDigitSum(this.totalChero);
    this.totalNew = this.numberSingleDigitSum(this.totalNew);
  }
  numberSingleDigitSum(n: number): number{
    var final:number=0;
    while(n>0){
      var r = n%10;
      final += r;
      n=(n-r)/10;
    }
    return (final>9) ? this.numberSingleDigitSum(final) : final;
  }
}
