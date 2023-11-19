import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Station} from "../../../../core/models/Station";

@Component({
  selector: 'app-new-station',
  templateUrl: './new-station.component.html',
  styleUrls: ['./new-station.component.css']
})
export class NewStationComponent {
  constructor( private router:Router) {
  }
  station: Station = new Station("", "");
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.station)
  }
}
