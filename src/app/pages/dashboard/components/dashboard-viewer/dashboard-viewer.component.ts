import { Component } from '@angular/core';
import {Line} from "../../../../core/models/Line";
import {Observable} from "rxjs";
import {selectBusinessLines} from "../../../../core/store/selectors/business.selectors";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../core/models/IAppState";

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.css']
})
export class DashboardViewerComponent {

  public readonly lines$!: Observable<Line[]>;

  constructor(private store: Store<AppState>) {
    this.lines$ = this.store.pipe(
      select(selectBusinessLines),
    );
  }
  public getLineId(_: number, item: Line): string {
    return item.id.toString();
  }

}
