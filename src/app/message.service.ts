import { Injectable } from '@angular/core';
import {  MessagesComponent } from '../app/messages/messages.component';
import { MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
