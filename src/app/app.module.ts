import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BeaconMonitorComponent } from './beacon_monitoring/beacon-monitor.component';
import { IonicModule } from '@ionic/angular'; // Importa el componente BeaconMonitorComponent


@NgModule({
  declarations: [
    AppComponent,
    //BeaconMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
