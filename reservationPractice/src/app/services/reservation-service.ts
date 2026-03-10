import { Injectable } from '@angular/core';
import { ReservationInterface, slot } from '../interface/ReservationInterface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {


  private reservations : ReservationInterface[] = [
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '9am - 12noon',
      isBooked : false
    },
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '12noon - 3pm',
      isBooked : true
    },
    {
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '3pm - 6pm',
      isBooked : false
    },
     {
      rName : 'Heart Lake Conservation Area',
      rTime : '9am - 12noon',
      isBooked : false
    },
    {
      rName : 'Heart Lake Conservation Area',
      rTime : '12noon - 3pm',
      isBooked : true
    },
    {
      rName : 'Heart Lake Conservation Area',
      rTime : '3pm - 6pm',
      isBooked : true
    }
  ];

  getReservations(): ReservationInterface[] {
    return this.reservations;
  }

  toggleBooking(i: number) {
    this.reservations[i].isBooked = !this.reservations[i].isBooked;
  }

  addReservation(rName: string, sTime: string, isBooked: boolean) {
    const rTime= sTime as slot;
    if (rName != '') {
    this.reservations.push({ rName, rTime, isBooked });
    }
  } 
 }
