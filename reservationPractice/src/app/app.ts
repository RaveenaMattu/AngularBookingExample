import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reservation } from './components/reservation/reservation';

@Component({
  selector: 'app-root',
  imports: [Reservation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reservationPractice');
}
