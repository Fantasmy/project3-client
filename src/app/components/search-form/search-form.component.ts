import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean;
  @Input() error: string;
  @Input() processing: boolean;
  @Input() event: any;

  @Output() submitdata: EventEmitter<any> = new EventEmitter();

  @Input() musics = ['classic', 'folklore', 'jazz', 'pop', 'rap', 'rock', 'other'];
  selectedMusic: string;

//   selectionChanged() {
//     this.submitdata.emit(this.selectedMusic);
// }

  constructor(private eventService: EventService, private router: Router ) {
    this.event = {};
  }

  ngOnInit() {}

  searchEvents(form) { // validation of the form
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.eventService.listAllByType(this.selectedMusic)
        .then((data) => {
          // setTimeout(() => {
            this.event = data;
            this.submitdata.emit(this.event);
          // }, 1500);
        });
    }
  }
}
