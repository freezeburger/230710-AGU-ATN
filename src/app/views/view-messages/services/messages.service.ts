import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageEntry } from '../interfaces/type';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http:HttpClient
  ) { }

  read(){}

  save( entry:MessageEntry ){

    const payload:Omit<Message, 'id'> = { ...entry, time:Date.now() }
    this.http.post( environment.MESSAGE_API, payload).subscribe();

  }
}
