import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor() {
    window.sessionStorage.setItem('isLoggedIn', 'false');

  }

  isLoggedIn() {
    return window.sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
