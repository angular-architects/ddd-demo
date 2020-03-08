import { Component, OnInit } from '@angular/core';
import { CancelFacade } from '@ddd-demo/booking/domain';

@Component({
  selector: 'booking-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {
  constructor(private cancelFacade: CancelFacade) {}

  ngOnInit() {}
}
