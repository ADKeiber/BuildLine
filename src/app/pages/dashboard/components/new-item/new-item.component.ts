import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Item} from "../../../../core/models/Item";
import {ItemStatus} from "../../../../core/models/ItemStatus";
import {Section} from "../../../../core/models/Section";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {
  constructor( private router:Router) {
  }
  item: Item = new Item("","","", new ItemStatus(""), "", 0, "", "", "", 0, 0, 0, Section.COMPLETED, "");
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.item)
  }
}
