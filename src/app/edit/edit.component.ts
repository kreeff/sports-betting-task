import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { RequesterService } from '../common/requester.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  events$: Observable<IEvent[]>;    
  editID: number = 0;

  constructor(private router: Router, private requesterService: RequesterService) { }

  ngOnInit(): void {
    this.events$ = this.requesterService.loadEvents()
  }
  addEvent() {
    return this.requesterService.createEvent().subscribe(() => {
      this.events$ = this.requesterService.loadEvents();
    });
  }
  deleteEvent(id: number) {
    return this.requesterService.deleteEvent(id).subscribe(() => {
      this.events$ = this.requesterService.loadEvents();
    });
  }
  editEvent(data: Object) {   
      return this.requesterService.updateEvent(this.editID, data).subscribe(() => {
      this.events$ = this.requesterService.loadEvents();
      this.editID = 0;
    });    
  }
  // take eventID to make event editable
  editableRow(eventID: number){    
    this.editID = eventID;
  }
  // navigate to "preview" view
  goToPreview() {
    this.router.navigate(['preview'])
  }
}
