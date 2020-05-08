import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {NgForm} from '@angular/forms';
import { WebsocketService } from '../websocket.service';

export interface iMessage{
  user:string,
  val:string
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    , private websocketservice: WebsocketService) { 
    iconRegistry.addSvgIcon(
      'send',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu/send-24px.svg'));
  }

  message: string;
  messages: string[] = [];
  
  ngOnInit(): void {
    this.websocketservice
    .listen('chatmsg')
    .subscribe((data: string)=>{
      this.messages.push(data);
      console.log('changed data is: ' + data);
    });
    this.websocketservice
    .listen('typing')
    .subscribe((data: string)=>{
      this.typeStatusMsg = "typing...";
    });
  }
  typeStatusMsg:string = '';
  typeStatus(event: any, status:number): void{
    this.typeStatusMsg = "typing...";
    this.websocketservice.emit('typing', this.typeStatusMsg );
    if(event.keyCode == 13) this.postMsg(event);
    if(status==0) {
      this.typeStatusMsg = "";
      this.websocketservice.emit('typing', this.typeStatusMsg );
    }
  }
  postMsg(f: NgForm){
    this.websocketservice.emit('chatmsg', f.value );
  }
}
