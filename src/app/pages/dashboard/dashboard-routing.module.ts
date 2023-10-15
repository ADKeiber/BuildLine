import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./modules/overview/overview.component";
import {ManageComponent} from "./modules/manage/manage.component";
import {AnalyticsComponent} from "./modules/analytics/analytics.component";

const routes: Routes = [
  {
    path: "overview",
    component: OverviewComponent
  },
  {
    path: "manage",
    component: ManageComponent
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
