import { Component, OnInit } from '@angular/core';
export class Qa
{
  Question: string;
  Answer: string
}
export class Qs
{
  qsl: Qa[];
  Feedback: string[]
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
  dotnetqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      `Very Good Feedback:
      All details in resume are as per said and according to JD in hand basically .Net profile but worked in React and other UI technologies also
      candidate was very through in OOPS.       
      UI worked and aware of css and other HTML javascript basics      
      logical programming good and could think of the steps      
      C# is aware and can write required code, and also pretty handson in advanced topics. Have idea on whole thing.      
      Design things also he could answer.      
      database side SQL server worked and could write query      
      One word good programmer with logical skill.      
      Could understand scenerios and problem statements and drove to the right direction.      
      Communication skill      
      Average. could establish communication.        
      Expertise in thinking. 
      `,
      `
      Average Feedback:
      All details in resume are as per said and according to JD in hand basically .Net profile but worked in React and other UI technologies also
      candidate was very through in OOPS.       
      UI worked and aware of css and other HTML javascript basics      
      logical programming good and could think of the steps      
      C# is aware and can write required code, and also pretty handson in advanced topics. Have idea on whole thing.      
      Design things also he could answer.      
      database side SQL server worked and could write query      
      One word good programmer with logical skill.      
      Could understand scenerios and problem statements and drove to the right direction.      
      Communication skill      
      Average. could establish communication.        
      Expertise in thinking. 
      `,
      `
      Bad Feedback:
      All details in resume are as per said and according to JD in hand basically .Net profile but worked in React and other UI technologies also
      candidate was very through in OOPS.       
      UI worked and aware of css and other HTML javascript basics      
      logical programming good and could think of the steps      
      C# is aware and can write required code, and also pretty handson in advanced topics. Have idea on whole thing.      
      Design things also he could answer.      
      database side SQL server worked and could write query      
      One word good programmer with logical skill.      
      Could understand scenerios and problem statements and drove to the right direction.      
      Communication skill      
      Average. could establish communication.        
      Expertise in thinking. 
      `
    ]
  };
  azureqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
  javaqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
  awsqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
  pythonqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
  reactqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
  angularqsl: Qs = 
  { qsl:
    [
      {
        Question:"Azure Reference Architechture",
        Answer:"https://docs.microsoft.com/en-us/azure/architecture/guide/ \n https://docs.microsoft.com/en-us/azure/architecture/browse/"
      },
      {
        Question:"Azure Services",
        Answer:"https://azure.microsoft.com/en-in/services/"
      }
    ],
    Feedback: [
      ``,
      ``
    ]
  };
}
