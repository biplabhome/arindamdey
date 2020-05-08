import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

export interface numsys{
  l: string,
  n: number
}
export interface numAffinity{
  num: string,
  frndNum: string,
  enemyNum: string,
  nutralNum: string
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
  //events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dayNumberCalculate(event);
    //this.events.push(`${type}: ${event.value}`);
  }

  myFilter = (d: Date | null): boolean => {
    return d<= new Date();
  }
  startDate = new Date(1990, 0, 1);

  selectedDate = new Date();
  heartDesireNumberChero:number=0;
  heartDesireNumberNew:number=0;
  outerPersonalityNumberChero:number=0;
  outerPersonalityNumberNew:number=0;
  
  firstChallangeNumberChero:number=0;
  firstChallangeNumberNew:number=0;
  secondChallangeNumberChero:number=0;
  secondChallangeNumberNew:number=0;
  thirdChallangeNumberChero:number=0;
  thirdChallangeNumberNew:number=0;
  fourthChallangeNumberChero:number=0;
  fourthChallangeNumberNew:number=0;

  totalChero:number =0;
  totalNew:number =0;
  firstNumber:number=0;
  secondNumber:number=0;
  frndNumbers:string='';
  enemyNumbers:string='';
  nutralNumbers:string='';
  
  dayNumberCalculate(event: any): void  {
    this.selectedDate = new Date(event.target.value);
    var day = this.numberSingleDigitSum(this.selectedDate.getDate());
    var month = this.numberSingleDigitSum(this.selectedDate.getMonth()+1);
    var year = this.numberSingleDigitSum(this.selectedDate.getFullYear());

    this.firstChallangeNumberChero 
            = this.firstChallangeNumberNew 
            = (day>month) ? (day - month) : (month - day);

    this.secondChallangeNumberChero 
            = this.secondChallangeNumberNew 
            = (day>year) ? (day - year) : (year - day);

    this.thirdChallangeNumberChero 
            = this.thirdChallangeNumberNew 
            = (day>year) ? (day - year) : (year - day);

    this.fourthChallangeNumberChero = (this.firstChallangeNumberChero > this.secondChallangeNumberChero)
    ? (this.firstChallangeNumberChero - this.secondChallangeNumberChero)
    : (this.secondChallangeNumberChero - this.firstChallangeNumberChero); 
    
    this.fourthChallangeNumberNew = (this.firstChallangeNumberNew > this.secondChallangeNumberNew)
    ? (this.firstChallangeNumberNew - this.secondChallangeNumberNew)
    : (this.secondChallangeNumberNew - this.firstChallangeNumberNew); 

    this.fourthChallangeNumberChero 
            = this.fourthChallangeNumberNew 
            = (month>year) ? (month - year) : (year - month);

    this.firstNumber = day;
    this.secondNumber = this.numberSingleDigitSum(day+month+year);
  }
  
  vowels:Array<string> = ['a','e','i','o','u'];
  cheroNum: numsys[] = [
    {l:'',n:0}, {l:'aijqy',n:1}, {l:'bkr',n:2}, {l:'cgls',n:3}, {l:'dmt',n:4}, {l:'ehnx',n:5}, {l:'uvw',n:6},
    {l:'oz',n:7}, {l:'fp',n:8}, {l:'',n:9}
  ];
  newNum: numsys[] = [
    {l:'',n:0}, {l:'ajs',n:1}, {l:'bkt',n:2}, {l:'clu',n:3}, {l:'dmv',n:4}, {l:'enw',n:5}, {l:'fox',n:6},
    {l:'gpy',n:7}, {l:'hqz',n:8}, {l:'ir',n:9}
  ];
  numAffinityChart: numAffinity[] = [
    {
      num:'1',
      frndNum:'2,3,4,7,9',
      enemyNum:'6,8',
      nutralNum:'5'
    },
    {
      num:'2',
      frndNum:'1,4,5,7',
      enemyNum:'-',
      nutralNum:'3,6,8,9'
    },
    {
      num:'3',
      frndNum:'1,2,4,7,9',
      enemyNum:'5,6',
      nutralNum:'8'
    },
    {
      num:'4',
      frndNum:'1,2,3,7,9',
      enemyNum:'6,8',
      nutralNum:'5'
    },
    {
      num:'5',
      frndNum:'1,4,6',
      enemyNum:'2,7',
      nutralNum:'3,8,9'
    },
    {
      num:'6',
      frndNum:'5,8',
      enemyNum:'1,2,4,7',
      nutralNum:'3,9'
    },
    {
      num:'7',
      frndNum:'1,2,4,5',
      enemyNum:'-',
      nutralNum:'3,6,8,9'
    },
    {
      num:'8',
      frndNum:'5,6',
      enemyNum:'1,2,4,7,9',
      nutralNum:'3'
    },
    {
      num:'9',
      frndNum:'1,2,3,4,7',
      enemyNum:'5',
      nutralNum:'6,8'
    }
  ];
  selectcalculate(event: any): void {
    var v = event.target.value.toLowerCase();
    this.totalNew = 0;
    this.totalChero = 0;
    for(var i=0;i< v.length;i++)
    {
      var parent = this;
      var isVowel:boolean = this.vowels.some(element => element == v[i]);
      this.cheroNum.find(function(element) { 
        if(element.l.indexOf(v[i]) != -1){
          parent.totalChero += element.n;
          parent.heartDesireNumberChero += isVowel ? element.n : 0;
          parent.outerPersonalityNumberChero += !isVowel ? element.n : 0;          
        }
      });
      this.newNum.find(function(element) { 
        if(element.l.indexOf(v[i]) != -1){
          parent.totalNew += element.n;
          parent.heartDesireNumberNew += isVowel ? element.n : 0;
          parent.outerPersonalityNumberNew += !isVowel ? element.n : 0;   
        }
      });
    }
    this.totalChero = this.numberSingleDigitSum(this.totalChero);
    this.totalNew = this.numberSingleDigitSum(this.totalNew);

    this.heartDesireNumberChero = this.numberSingleDigitSum(this.heartDesireNumberChero);
    this.heartDesireNumberNew = this.numberSingleDigitSum(this.heartDesireNumberNew);
    this.outerPersonalityNumberChero = this.numberSingleDigitSum(this.outerPersonalityNumberChero);
    this.outerPersonalityNumberNew = this.numberSingleDigitSum(this.outerPersonalityNumberNew);
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
