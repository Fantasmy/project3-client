import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.scss']
})
export class EventDetailsPageComponent implements OnInit {

  bar: Object;
  event: Object;
  idEvent: string;
  user: Object;

  constructor(private authService: AuthService,
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.activatedRoute.params.subscribe((params) => {
      this.idEvent = params.id;
      this.eventService.getOne(this.idEvent)
        .then((data) => {
            this.event = data;
        });
    });

  }

  handleDeleteClick() {
    this.eventService.deletetOne(this.idEvent)
    .then(() => {
      this.router.navigate(['/events']);
    })
    .catch(err => {
      console.log(err);
    });
    }
}
