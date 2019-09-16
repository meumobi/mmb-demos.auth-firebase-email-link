import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  email: string;
  url: string;
  error = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

  confirmSignIn() {
    this.error = null;
    this.authService.confirmSignIn(this.email, this.url)
    .then(
      () => this.router.navigate(['/home'])
    )
    .catch(
      error => this.error = error
    );
  }
}
