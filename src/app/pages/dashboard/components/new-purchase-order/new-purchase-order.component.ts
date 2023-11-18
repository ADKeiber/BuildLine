import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent {
  constructor( private router:Router) {
  }
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
}
