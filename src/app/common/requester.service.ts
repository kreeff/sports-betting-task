//  CRUD  requests

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../interfaces/event';
import { getDateAndTime } from './dateAndTime';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) { }

  loadEvents() {
    return this.http.get<IEvent[]>(environment.serverUrl);    
  }
  createEvent() {
    return this.http.post<IEvent>(environment.serverUrl, 
    {        
      startTime: `${getDateAndTime().initialDateTime}`
    });
  }

  deleteEvent(id: number) {
     return this.http.delete<IEvent>(`${environment.serverUrl}/${id}`);   
    }

  updateEvent(id: number, data:any) {

    const eventData = {
      eventName: data.eventName?.trim(),
      homeWin: data.odds.homeWin === '' ? null : data.odds.homeWin,
      draw: data.odds.draw === '' ? null : data.odds.draw,
      awayWin: data.odds.awayWin === '' ? null : data.odds.awayWin,
      startTime: data.startTime
    }

    return this.http.put<IEvent>(`${environment.serverUrl}/${id}`,eventData ); 

  }  
}
