import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BarService } from '../../services/bar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bar-details-page',
  templateUrl: './bar-details-page.component.html',
  styleUrls: ['./bar-details-page.component.scss']
})
export class BarDetailsPageComponent implements OnInit {

  bar: Object;
  idBar: string;
  user: Object;

  constructor(private authService: AuthService,
    private barService: BarService,
    private activatedRoute: ActivatedRoute ,
    private router: Router ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.activatedRoute.params.subscribe((params) => {
      this.idBar = params.id;
     // const id = params.id;  // this params.id comes from the app event/:id
      this.barService.getOneBar(this.idBar)
        .then((data) => {
            this.bar = data;
        });
    });
  }

}
