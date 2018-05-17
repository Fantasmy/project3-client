import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean;  // checks form and blocks when fnished submit
  @Input() error: string;
  @Input() processing: boolean;
  @Input() events: any;

  @Output() submitdata: EventEmitter<any> = new EventEmitter(); // submitdata is the function

  @Input() musics = ['classic', 'folklore', 'jazz', 'pop', 'rap', 'rock', 'other'];
  selectedMusic: string;

//   selectionChanged() {
//     this.submitdata.emit(this.selectedMusic);
// }

  constructor(private eventService: EventService, private router: Router ) {
    this.events = [];
  }

  ngOnInit() {}

  submitForm(form) { // validation of the form
    if (form.valid) {
      this.eventService.listAllByType(this.selectedMusic)
        .then((data) => {
          // setTimeout(() => {
            this.events = data;
            this.submitdata.emit(this.events);
          // }, 1500);
        });
    }
  }
}
