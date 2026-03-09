import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation-service';
import { ReservationInterface } from '../../interface/ReservationInterface';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reservation',
  imports: [NgbModalModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {

  reservations: ReservationInterface[] = [];

  constructor(private reservationService: ReservationService, private modalService: NgbModal) {
    this.reservations = this.reservationService.getReservations();
  }

  toggleReservation(i:number) {
    this.reservationService.toggleBooking(i);
  }

  openModal(content: any) {
  this.modalService.open(content, {
    centered: true
  });

}
}
/*

STEP 1: Install Angular Bootstrap using:  npm add @ng-bootstrap/ng-bootstrap
STEP 2: import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; in the component

*/