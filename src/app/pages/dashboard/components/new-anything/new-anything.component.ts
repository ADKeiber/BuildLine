import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-anything',
  templateUrl: './new-anything.component.html',
  styleUrls: ['./new-anything.component.css']
})
export class NewAnythingComponent {
  constructor( private router:Router) {
  }
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
}
