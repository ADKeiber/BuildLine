import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-station',
  templateUrl: './new-station.component.html',
  styleUrls: ['./new-station.component.css']
})
export class NewStationComponent {
  constructor( private router:Router) {
  }
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }

}
