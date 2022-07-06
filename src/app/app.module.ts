import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelregistrationComponent } from './travelregistration/travelregistration.component';
import { SearchplaceComponent } from './searchplace/searchplace.component';
import { ViewdestinationComponent } from './viewdestination/viewdestination.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelregistrationComponent,
    SearchplaceComponent,
    ViewdestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
