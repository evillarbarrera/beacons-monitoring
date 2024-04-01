import { Component, OnInit } from '@angular/core';
// import * as cordova from 'cordova';
declare var cordova: any;

@Component({
  selector: 'app-beacon-monitor',
  templateUrl: 'beacon-monitor.component.html',
  styleUrls: ['beacon-monitor.component.css']
})
export class BeaconMonitorComponent implements OnInit {
  detectedBeacons: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.startBeaconDetection();
  }

  startBeaconDetection() {
    cordova.plugins.altbeacon.detectBeacons(
      (beacons: any[]) => {
        console.log('Beacons detected:', beacons);
        // Aquí puedes manejar la información de los beacons detectados
      },
      (error: any) => {
        console.error('Error detecting beacons:', error);
      }
    );
  }

}
