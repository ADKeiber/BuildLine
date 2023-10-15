import { Component } from '@angular/core';
import { DropdownModule } from "primeng/dropdown";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css']
})
export class NavDropdownComponent {
  navOptions = [
    {name:"Dashboard"},
    {name:"Manage"},
    {name:"Analytics"}
  ];
  currentNav = {name:"Dashboard"}
  constructor(private _router:Router) {
  }
  navigate(){
    this._router.navigate(["/dashboard/" + this.currentNav.name.toLowerCase()]);
  }
}
