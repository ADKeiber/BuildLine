import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from "./modules/overview/overview.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardViewerComponent } from './components/dashboard-viewer/dashboard-viewer.component';
import { HeaderComponent } from './shell/header/header.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import { SideNavComponent } from './shell/side-nav/side-nav.component';
import { SideElementComponent } from './components/side-element/side-element.component';
import { ManageComponent } from './modules/manage/manage.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { NavDropdownComponent } from './shell/nav-dropdown/nav-dropdown.component';
import {DropdownModule} from "primeng/dropdown";
import { LineViewComponent } from './components/line-view/line-view.component';
import { StationViewComponent } from './components/station-view/station-view.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import {businessReducer} from "../../core/store/reducers/business.reducer";
import {StoreModule} from "@ngrx/store";
import {CardModule} from "primeng/card";
import {DragulaModule} from "ng2-dragula";
import {TreeSelectModule} from "primeng/treeselect";

@NgModule({
  declarations: [
    OverviewComponent,
    DashboardViewerComponent,
    HeaderComponent,
    SideNavComponent,
    SideElementComponent,
    ManageComponent,
    AnalyticsComponent,
    NavDropdownComponent,
    LineViewComponent,
    StationViewComponent,
    ItemViewComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    StoreModule.forFeature('business', businessReducer),

    CardModule,
    DragulaModule,
    TreeSelectModule,
  ]
})
export class DashboardModule { }
