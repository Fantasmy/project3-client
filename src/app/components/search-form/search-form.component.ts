import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() submitdata: EventEmitter<any> = new EventEmitter(); // submitdata is the function

  @Input() musics = ['classic', 'folklore', 'jazz', 'pop', 'rap', 'rock', 'other'];
  selectedMusic: string;

  constructor(private eventService: EventService, private router: Router ) { }

  ngOnInit() {}

  submitForm(form) { // validation of the form
    if (form.valid) {
      this.eventService.listAllByType(this.selectedMusic)
        .then((data) => {
            this.submitdata.emit(data);
        });
    }
  }
}
