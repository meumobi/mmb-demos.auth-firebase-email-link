import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  signOut() {
    this.authService.signOut()
    .then(
      () => this.router.navigate(['/login'])
    );
  }
}


