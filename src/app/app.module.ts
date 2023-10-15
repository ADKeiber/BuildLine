import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {businessReducer} from "./core/store/reducers/business.reducer";
import {DragulaModule} from "ng2-dragula";
import {NodeService} from "./core/services/nodeservice";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, StoreModule.forRoot(businessReducer),
    DragulaModule.forRoot()],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
