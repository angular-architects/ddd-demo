import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@ddd-demo/booking/domain';

@Component({
  selector: 'booking-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  flightList$ = this.searchFacade.flightList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }
}
