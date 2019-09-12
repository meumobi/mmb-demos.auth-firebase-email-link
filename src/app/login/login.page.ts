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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.email)
    .then(
      () => this.emailSent = true
    );
  }
}
