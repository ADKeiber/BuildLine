import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manage-viewer',
  templateUrl: './manage-viewer.component.html',
  styleUrls: ['./manage-viewer.component.css'],
  providers: [MessageService]
})
export class ManageViewerComponent {

  items: MenuItem[];

  constructor(private messageService: MessageService, private router:Router, private route:ActivatedRoute) {
    this.items = [
      {
        label: 'Company',
        command: () => {
          this.router.navigate(['new/company'], {relativeTo: this.route});
        }
      },
      {
        label: 'Item',
        command: () => {
          this.router.navigate(['new/item'], {relativeTo: this.route});
        }
      },
      {
        label: 'Product Line',
        command: () => {
          this.router.navigate(['new/productLine'], {relativeTo: this.route});
        }
      },
      {
        label: 'Item Status',
        command: () => {
          this.router.navigate(['new/itemStatus'], {relativeTo: this.route});
        }
      },
      {
        label: 'Line',
        command: () => {
          this.router.navigate(['new/line'], {relativeTo: this.route});
        }
      },
      {
        label: 'Purchase Order',
        command: () => {
          this.router.navigate(['new/purchaseOrder'], {relativeTo: this.route});
        }
      },
      {
        label: 'Station',
        command: () => {
          this.router.navigate(['new/station'], {relativeTo: this.route});
        }
      },
    ];
  }
  navToNewPage(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
  goBack(){
    this.router.navigate(['dashboard/manage'])
  }
}
