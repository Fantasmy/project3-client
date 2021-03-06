import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean;
  @Input() error: string;
  @Input() processing: boolean;
  @Input() event: any;

  @Output() submitdata: EventEmitter<any> = new EventEmitter();

  musics = ['classic', 'folklore', 'jazz', 'pop', 'rap', 'rock', 'other'];
  selectedMusic; // --- indicate the option choosed

  // In form => [(ngModel)]="event.musicType" <- sends the value to event object, musicType is same value from backend

  constructor(private eventService: EventService, private router: Router) { 
    this.event = {};
  }

  ngOnInit() {
  }

  submitForm(form) { // validation of the form
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitdata.emit(this.event);
      // yo page, there was a submit action!
    }
  }

}
