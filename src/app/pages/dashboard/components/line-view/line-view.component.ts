import {Component, Input, OnInit} from '@angular/core';
import {JWTHelper} from "../../../../core/models/JWT";
import {select, Store} from "@ngrx/store";
import {Station} from "../../../../core/models/Station";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from "../../../../core/models/IAppState";
import {Line} from "../../../../core/models/Line";
import {selectBusinessStationsWithIds} from "../../../../core/store/selectors/business.selectors";

@Component({
  selector: 'app-line-view',
  templateUrl: './line-view.component.html',
  styleUrls: ['./line-view.component.css']
})
export class LineViewComponent implements OnInit {
  // @Input() lineId: string = "";
  @Input() line:Line = new Line("1");
  lineName: string = "";
  constructor(private store: Store<AppState>) {}

  stations$: Observable<Station[]> = new Observable<Station[]>();
  ngOnInit(): void {
    // console.log("Line #" + this.line.lineId)
    this.lineName = this.line.lineName;
    // console.log("LINE STEP IDS: " + this.line.lineName)
    // @ts-ignore
    this.stations$ = this.store.pipe(
      select(selectBusinessStationsWithIds(this.line.stationIds))
    );
  }
}
