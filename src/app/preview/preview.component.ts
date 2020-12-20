import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../common/requester.service';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { getDateAndTime } from '../common/dateAndTime';
import { dateConvertor } from '../common/dateConvertor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  events$: Observable<IEvent[]>

  constructor(private requesterService:RequesterService, private router: Router) { }

  ngOnInit(): void {
    this.events$ = this.requesterService.loadEvents();
  }
// checks if the start time of the event passed 
  isStartPassed(startTime: string) {
    const currentUTC = new Date(getDateAndTime().currentDateTime);
    const [date, time] = startTime.split(' ');    
    const eventDT = new Date(`${dateConvertor(date)} ${time}`);
    
    return (currentUTC >= eventDT);
  }
  
  betHandler(id: number, betType: string, odd: number, startTime: string  ) {
    if(odd) {
    this.isStartPassed(startTime) ? alert('Event closed !') : confirm(`ID: ${id}    Bet type: ${betType}    Odd: ${odd.toFixed(2)}`);
    }
  }
  //  navigate to "edit" view
  goToEdit() {
    this.router.navigate(['edit']);
  }
 
}
