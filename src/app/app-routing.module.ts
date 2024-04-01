import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeaconMonitorComponent } from './beacon_monitoring/beacon-monitor.component';
import { AppComponent } from './app.component'
import { Beacons1 } from './beacons1/beacons1.component';

const routes: Routes = [
  { path: 'beacons', component: BeaconMonitorComponent }, // Ruta para el componente BeaconMonitorComponent
  { path: 'app', component: AppComponent}, // Otras rutas de tu aplicación
  { path: 'beacons1', component: Beacons1},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
