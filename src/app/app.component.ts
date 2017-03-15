import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  nav() {
    //this.router.navigate(['/patterns']);
    this.router.navigateByUrl('/DummyComponent', true);
    this.router.navigate(['/patterns']);
  }
}
