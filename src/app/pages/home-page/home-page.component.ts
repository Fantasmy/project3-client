import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() event: Object;

  @Output() events: Object;
  // @Output() events: Array<any>;

  constructor() { }

  ngOnInit() {
  }
}
