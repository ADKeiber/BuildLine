import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ItemStatus} from "../../../../core/models/ItemStatus";

@Component({
  selector: 'app-new-item-status',
  templateUrl: './new-item-status.component.html',
  styleUrls: ['./new-item-status.component.css']
})
export class NewItemStatusComponent {
  constructor( private router:Router) {
  }
  itemStatus: ItemStatus = new ItemStatus("");
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.itemStatus)
  }
}
