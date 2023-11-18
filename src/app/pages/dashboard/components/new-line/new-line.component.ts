import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ItemLine} from "../../../../core/models/ItemLine";
import {Line} from "../../../../core/models/Line";

@Component({
  selector: 'app-new-line',
  templateUrl: './new-line.component.html',
  styleUrls: ['./new-line.component.css']
})
export class NewLineComponent {
  constructor( private router:Router) {
  }
  line: Line = new Line("");
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }

  submit(){
    console.log(this.line)
  }
}
