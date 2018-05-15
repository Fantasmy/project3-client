import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-card',
  templateUrl: './bar-card.component.html',
  styleUrls: ['./bar-card.component.scss']
})
export class BarCardComponent implements OnInit {

  @Input() bar: Object;

  constructor() { }

  ngOnInit() {
  }

}
