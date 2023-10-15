import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-element',
  templateUrl: './side-element.component.html',
  styleUrls: ['./side-element.component.css']
})
export class SideElementComponent {

  @Input() test: String;
  constructor(private _router:Router) {
    this.test = "";
  }
  clickEvent(){
    this._router.navigate(["/dashboard/" + this.test.toLowerCase()]);
  }
}
