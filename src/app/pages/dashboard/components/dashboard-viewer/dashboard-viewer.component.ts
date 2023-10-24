import {Component, OnInit} from '@angular/core';
import {Line} from "../../../../core/models/Line";
import {Observable} from "rxjs";
import {selectBusinessLines} from "../../../../core/store/selectors/business.selectors";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../core/models/IAppState";
import {loadLines, loadStations} from "../../../../core/store/actions/business.actions";

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.css']
})
export class DashboardViewerComponent implements OnInit{

  public lines$!: Observable<Line[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadLines());
    this.store.dispatch(loadStations());
    // this.lines$ = this.store.pipe(
    //   select(selectBusinessLines),
    // );
    // console.log("lines$ ")
    // this.lines$.forEach((value) => console.log(value))
  }
  // public getLineId(_: number, line: Line): string {
  //   return line.lineId;
  // }

  ngOnInit(): void {
    this.lines$ = this.store.pipe(
      select(selectBusinessLines),
    );
  }

}
