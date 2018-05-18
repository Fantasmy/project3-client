import { Component, OnInit } from '@angular/core';
import { BarService } from '../../services/bar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-edit-page',
  templateUrl: './bar-edit-page.component.html',
  styleUrls: ['./bar-edit-page.component.scss']
})
export class BarEditPageComponent implements OnInit {

  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  bar: any;

  constructor(private barService: BarService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
    this.barService.getOneBar(id)
    .then((data) => {
      this.bar = data;
    })
    .catch((err) => {
      console.log(err);
    });
  });
  }

  submitForm() {
    this.barService.update(this.bar)
    .then((data) => {
      this.router.navigate(['/profile']);
      // this.movie = data;
      // this.processing = false;
    })
    .catch(err => {
      console.log(err);
      this.error = err.error.code;
      this.processing = false;
      this.feedbackEnabled = false;
    });
  }

}
