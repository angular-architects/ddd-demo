import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Flight } from '../entities/flight';
import { FlightDataService } from '../infrastructure/flight.data.service';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  private flightListSubject = new BehaviorSubject<Flight[]>([]);
  flightList$ = this.flightListSubject.asObservable();

  constructor(private flightDataService: FlightDataService) {}

  load(): void {
    this.flightDataService.load().subscribe(
      flightList => {
        this.flightListSubject.next(flightList);
      },
      err => {
        console.error('err', err);
      }
    );
  }
}
