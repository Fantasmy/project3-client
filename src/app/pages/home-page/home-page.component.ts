import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 feedbackEnabled: boolean;  // checks form and blocks when fnished submit
 error: string;
 processing: boolean;
 events: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  handleSearchForm(eventsSearched) { // events from search component, from emitter
    this.processing = true;
    this.events = eventsSearched;
  }

}
