import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  phone: Number;
  website: String;
  location: Object;
  street: String;
  strNumber: String;
  postCode: String;
  city: String;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;

      this.location = {
        street: this.street,
        strNumber: this.strNumber,
        postCode: this.postCode,
        city: this.city
      }

      const user = {
        username: this.username,
        password: this.password,
        phone: this.phone,
        website: this.website,
        location: this.location
      }

      console.log(user.location)

      this.authService.signup(user)
        .then((result) => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.code; 
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
