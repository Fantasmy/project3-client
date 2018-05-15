import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-edit-page',
  templateUrl: './event-edit-page.component.html',
  styleUrls: ['./event-edit-page.component.scss']
})
export class EventEditPageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  event: any;

  constructor(private eventService: EventService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
    this.eventService.getOne(id)
    .then((data) => {
      this.event = data;
    })
    .catch((err) => {
      console.log(err);
    });
  });
  }

  handleSubmitForm(event) {
    this.eventService.update(event)
    .then((data) => {
      this.router.navigate(['/events', this.event._id]);
      // this.movie = data;
      // this.processing = false;
    })
    .catch(err => {
      console.log(err);
      this.error = err.error.code;
      this.processing = false;
      this.feedbackEnabled = false;
    });
  }

}
