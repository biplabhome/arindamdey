import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export interface Message {
  author: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket:any;
  readonly uri:string='ws://apihubnode.azurewebsites.net';

  constructor() {
    this.socket = io(this.uri);
   }
  
   public listen = (event:any) => {
    return Observable.create((observer)=>{
      this.socket.on(event, (message)=>{
        observer.next(message);
      });
    });
  };

  public emit = (event:any, data:string) => {
    this.socket.emit(event, data);
    };
}
