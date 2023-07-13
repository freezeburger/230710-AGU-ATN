import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageEntry } from '../interfaces/type';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http:HttpClient
  ) {
    this.read();
  }

  // Subject are specific multicast Observables
  private _messages$ = new BehaviorSubject<Message[]>([]);
  public messages$ = this._messages$.asObservable();

  read(){
    this.http.get<Message[]>( environment.MESSAGE_API).subscribe( data => this._messages$.next(data));
  }

  save( entry:MessageEntry ){

    const payload:Omit<Message, 'id'> = { ...entry, time:Date.now() }
    this.http.post<Message>( environment.MESSAGE_API, payload ).subscribe(
      data => this._messages$.next([data, ...this._messages$.value ])
    );

  }
}
