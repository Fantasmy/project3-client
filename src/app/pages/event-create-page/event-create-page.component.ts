import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-create-page',
  templateUrl: './event-create-page.component.html',
  styleUrls: ['./event-create-page.component.scss']
})
export class EventCreatePageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  event: any;

  constructor(private eventService: EventService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  handleSubmitForm(event) {
    this.eventService.create(event)
      .then((result) => {
        this.router.navigate(['/']);
        // this.router.navigate(['/events', this.event._id]);
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }

}
