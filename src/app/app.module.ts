import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {businessReducer} from "./core/store/reducers/business.reducer";
import {DragulaModule} from "ng2-dragula";
import {NodeService} from "./core/services/nodeservice";
import { EffectsModule } from '@ngrx/effects';
import {BusinessEffects} from "./core/store/effects/business.effects";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, StoreModule.forRoot(businessReducer),
    EffectsModule.forRoot([BusinessEffects]), HttpClientModule,
    DragulaModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    RouterModule],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
