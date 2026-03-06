import { Injectable } from '@angular/core';
import { ReservationInterface } from '../interface/ReservationInterface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {

  private reservations : ReservationInterface[] = [
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '9 am - 12 noon',
      isBooked : false
    },
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '12 noon - 3 pm',
      isBooked : true
    },
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '3 pm - 6 pm',
      isBooked : false
    },
     {
      rName : 'Heart Lake Conservation Area',
      rTime : '9 am - 12 noon',
      isBooked : false
    },
    {
      rName : 'Heart Lake Conservation Area',
      rTime : '12 noon - 3 pm',
      isBooked : true
    },
    {
      rName : 'Heart Lake Conservation Area',
      rTime : '3 pm - 6 pm',
      isBooked : true
    }
  ];

  getReservations(): ReservationInterface[] {
    return this.reservations;
  }

  toggleBooking(i: number) {
    this.reservations[i].isBooked = !this.reservations[i].isBooked;
  }
  
 }
