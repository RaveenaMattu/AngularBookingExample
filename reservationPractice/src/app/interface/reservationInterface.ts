export interface ReservationInterface {
  id: string,
  rName: string;
  rTime: slot;
  isBooked: boolean;
}

export type slot = '9am - 12noon' | '12noon - 3pm' | '3pm - 6pm';