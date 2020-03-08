import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@ddd-demo/boarding/domain';
import { ManageComponent } from './manage.component';

import { BookingDomainModule } from '@ddd-demo/booking/domain';

@NgModule({
  imports: [
    CommonModule, 
    BoardingDomainModule,
    BookingDomainModule
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent]
})
export class BoardingFeatureManageModule {}



