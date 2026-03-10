import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation-service';
import { slot, ReservationInterface } from '../../interface/ReservationInterface';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [NgbModalModule, CommonModule, FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
  reservations: ReservationInterface[] = [];

  constructor(
    private reservationService: ReservationService,
    private modalService: NgbModal,
  ) {
    this.reservations = this.reservationService.getReservations();
  }

  openModal(content: any) {
    this.modalService.open(content, {
      centered: true,
      windowClass: 'custom-modal'
    });
  }

  //toggle availability
  toggleReservation(i: number) {
    this.reservationService.toggleBooking(i);
  }

  //add new reservation
  addReservation(id: string, rName: string, rTime: string, isBooked: boolean) {
    this.reservationService.addReservation(id, rName, rTime, isBooked);
  }

  //get booked reservations count
  bookedReservations(): number {
    return this.reservationService.bookCount();
  }

  //get available reservations count
  availableReservations(): number {
    return this.reservationService.availCount();
  }

  //get booked reservations
  displayBookedRes(): ReservationInterface[] {
    return this.reservations = this.reservationService.getBookedReservations();
  }
  //get available reservations
  displayAvailRes(): ReservationInterface[] {
    return this.reservations = this.reservationService.getAvailReservations();
  }

}
/*

STEP 1: Install Angular Bootstrap using:  npm add @ng-bootstrap/ng-bootstrap
STEP 2: import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; in the component

*/
