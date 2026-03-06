import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation-service';
import { ReservationInterface } from '../../interface/ReservationInterface';

@Component({
  selector: 'app-reservation',
  imports: [],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {

  reservations: ReservationInterface[] = [];

  constructor(private reservationService: ReservationService) {
    this.reservations = this.reservationService.getReservations();
  }

  

}
