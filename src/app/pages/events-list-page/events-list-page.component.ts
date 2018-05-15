import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.scss']
})
export class EventsListPageComponent implements OnInit {

  events: Array<any>;
  user: Object;

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.eventService.listAll()
      .then((data) => {
        this.events = data;
      });
  }

  toTop() {
    window.scrollTo ( 0, 0 );
  }

}
