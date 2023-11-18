import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ItemLine} from "../../../../core/models/ItemLine";

@Component({
  selector: 'app-new-product-line',
  templateUrl: './new-product-line.component.html',
  styleUrls: ['./new-product-line.component.css']
})
export class NewProductLineComponent {
  constructor( private router:Router) {
  }
  itemLine: ItemLine = new ItemLine();
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.itemLine)
  }
}
