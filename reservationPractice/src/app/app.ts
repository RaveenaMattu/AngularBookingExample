import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reservation } from './components/reservation/reservation';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-root',
  imports: [Reservation, NgbModalModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reservationPractice');
}
