import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => { // userCHange$ = Observable
      this.loading = false; // variables so the template can react
      this.user = user; // variables so the template can react
      this.anon = !user; // variables so the template can react
    });
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/']));
  }
}
