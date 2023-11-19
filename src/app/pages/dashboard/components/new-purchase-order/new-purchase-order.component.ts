import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PurchaseOrder} from "../../../../core/models/PurchaseOrder";

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent {
  constructor( private router:Router) {
  }

  po: PurchaseOrder = new PurchaseOrder();
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.po)
  }
}
