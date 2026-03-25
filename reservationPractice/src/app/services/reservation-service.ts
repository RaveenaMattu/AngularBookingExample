import { Injectable } from '@angular/core';
import { ReservationInterface, slot } from '../interface/ReservationInterface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {


  private reservations : ReservationInterface[] = [
    { id: 'MRN01',
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '9am - 12noon',
      isBooked : false
    },
    { id: 'AFT01',
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '12noon - 3pm',
      isBooked : true
    },
    { 
      id: 'EVE01',
      rName : 'Rattlesnake Point Conservation Area',
      rTime : '3pm - 6pm',
      isBooked : false
    },
     {
      id: 'MRN02',
      rName : 'Heart Lake Conservation Area',
      rTime : '9am - 12noon',
      isBooked : false
    },
    {
      id: 'AFT02',
      rName : 'Heart Lake Conservation Area',
      rTime : '12noon - 3pm',
      isBooked : true
    },
    {
      id: 'EVE02',
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

  // add reservation
  addReservation(id: string, rName: string, sTime: string, isBooked: boolean) {
    const rTime= sTime as slot;
    if (rName != '') {
    this.reservations.push({ id, rName, rTime, isBooked });
    }
  } 
  // delete reservation 
  deleteReservation(id: string) {
    const index = this.reservations.findIndex(r => r.id === id);
    if (index > -1) {
      this.reservations.splice(index, 1); // removes 1 element at the found index
    }
  }

  // update reservation
  updateReservation(id: string, rName: string, sTime: string, isBooked: boolean) {

    const res = this.reservations.find(r=>r.id === id);

    if(res) {
      res.id = id;
      res.rName = rName;
      res.rTime = sTime as slot;
      res.isBooked = isBooked;
    }

  }

  // filter() selects reservations where isBooked === true
  // length gives the count.

  bookCount(): number {
    return this.reservations.filter(r=>r.isBooked).length;
  }

  availCount(): number {
    return this.reservations.filter(r=>!r.isBooked).length;
  }

  //Reservations filterings
  getBookedReservations(): ReservationInterface[]{
    return this.reservations.filter(r=>r.isBooked === true);
  } 
  getAvailReservations(): ReservationInterface[]{
    return this.reservations.filter(r=>r.isBooked === false);
  } 
   
 }
