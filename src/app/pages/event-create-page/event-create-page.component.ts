import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service'

@Component({
  selector: 'app-event-create-page',
  templateUrl: './event-create-page.component.html',
  styleUrls: ['./event-create-page.component.scss']
})
export class EventCreatePageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(event) {
    this.eventService.create(event)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }

}
