import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@ddd-demo/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureCancelModule } from '@ddd-demo/booking/feature-cancel';
import { BoardingFeatureManageModule } from '@ddd-demo/boarding/feature-manage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookingFeatureSearchModule,
    HttpClientModule,
    BookingFeatureCancelModule,
    BoardingFeatureManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
