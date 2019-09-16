import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  emailSent = false;
  error = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.emailSent = false;
    this.error = null;
    this.authService.signIn(this.email)
    .then(
      () => this.emailSent = true
    )
    .catch(
      error => this.error = error
    );
  }
}
