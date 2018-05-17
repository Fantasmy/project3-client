import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-info-card',
  templateUrl: './bar-info-card.component.html',
  styleUrls: ['./bar-info-card.component.scss']
})
export class BarInfoCardComponent implements OnInit {

  @Input() bar: Object;
  @Input() location: Object;

  constructor() { }

  ngOnInit() {
  }

}
