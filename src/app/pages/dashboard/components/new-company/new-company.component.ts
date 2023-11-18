import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {NodeService} from "../../../../core/services/nodeservice";
import {Customer} from "../../../../core/models/Company";

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent {
  constructor( private router:Router, private nodeService: NodeService) {
    this.nodeService.getFiles().then((files) => (this.nodes = files));
  }
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
  submit(){
    console.log(this.business)
  }
  nodes!: any[];
  business: Customer = new Customer("", "", "");
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedNodes: new FormControl()
    });
  }
}
