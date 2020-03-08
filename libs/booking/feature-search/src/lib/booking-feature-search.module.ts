import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@ddd-demo/booking/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class BookingFeatureSearchModule {}
