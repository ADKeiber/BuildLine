import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./modules/overview/overview.component";
import {ManageComponent} from "./modules/manage/manage.component";
import {AnalyticsComponent} from "./modules/analytics/analytics.component";
import {ManageViewerComponent} from "./components/manage-viewer/manage-viewer.component";
import {NewAnythingComponent} from "./components/new-anything/new-anything.component";
import {NewCompanyComponent} from "./components/new-company/new-company.component";
import {NewItemComponent} from "./components/new-item/new-item.component";
import {NewProductLineComponent} from "./components/new-product-line/new-product-line.component";
import {NewItemStatusComponent} from "./components/new-item-status/new-item-status.component";
import {NewLineComponent} from "./components/new-line/new-line.component";
import {NewPurchaseOrderComponent} from "./components/new-purchase-order/new-purchase-order.component";
import {NewStationComponent} from "./components/new-station/new-station.component";

const routes: Routes = [
  {
    path: "overview",
    component: OverviewComponent
  },
  {
    path: "manage",
    component: ManageComponent,
    children : [
      {
        path: "",
        component: ManageViewerComponent
      },
      {
        path: "new",
        component: NewAnythingComponent,
      },
      {
        path: "new/company",
        component: NewCompanyComponent
      },
      {
        path: "new/item",
        component: NewItemComponent
      },
      {
        path: "new/productLine",
        component: NewProductLineComponent
      },
      {
        path: "new/itemStatus",
        component: NewItemStatusComponent
      },
      {
        path: "new/line",
        component: NewLineComponent
      },
      {
        path: "new/purchaseOrder",
        component: NewPurchaseOrderComponent
      },
      {
        path: "new/station",
        component: NewStationComponent
      },
    ]
  },
  {
    path: "analytics",
    component: AnalyticsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
