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
import { ManageViewerComponent } from './components/manage-viewer/manage-viewer.component';
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {SplitButtonModule} from "primeng/splitbutton";
import {MessageService} from "primeng/api";
import { NewviewerComponent } from './components/newviewer/newviewer.component';
import { NewAnythingComponent } from './components/new-anything/new-anything.component';
import { NewCompanyComponent } from './components/new-company/new-company.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { NewProductLineComponent } from './components/new-product-line/new-product-line.component';
import { NewItemStatusComponent } from './components/new-item-status/new-item-status.component';
import { NewLineComponent } from './components/new-line/new-line.component';
import { NewPurchaseOrderComponent } from './components/new-purchase-order/new-purchase-order.component';
import { NewStationComponent } from './components/new-station/new-station.component';

@NgModule({
  declarations: [
    OverviewComponent,
    DashboardViewerComponent,
    HeaderComponent,
    SideNavComponent,
    SideElementComponent,
    AnalyticsComponent,
    NavDropdownComponent,
    LineViewComponent,
    StationViewComponent,
    ItemViewComponent,
    ManageComponent,
    ManageViewerComponent,
    NewviewerComponent,
    NewAnythingComponent,
    NewCompanyComponent,
    NewItemComponent,
    NewProductLineComponent,
    NewItemStatusComponent,
    NewLineComponent,
    NewPurchaseOrderComponent,
    NewStationComponent,

  ],
  exports: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    StoreModule.forFeature('business', businessReducer),
    ButtonModule,
    CardModule,
    DragulaModule,
    TreeSelectModule,
    ToastModule,
    SplitButtonModule,
  ]
})
export class DashboardModule { }
