import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 events: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  handleSearchForm(eventsSearched) { // events from search component, from emitter
    this.events = eventsSearched;
  }

}
