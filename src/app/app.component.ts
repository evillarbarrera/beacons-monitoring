import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beacons-monitoring';

  constructor(private router: Router) {}

  irAOtraPagina() {
    this.router.navigate(['/beacons']);
  }
}
