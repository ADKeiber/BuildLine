import {Component, Input, OnInit} from '@angular/core';
import {selectBusinessLineStations} from "../../../../core/store/selectors/business.selectors";
import {JWTHelper} from "../../../../core/models/JWT";
import {select, Store} from "@ngrx/store";
import {Station} from "../../../../core/models/Station";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from "../../../../core/models/IAppState";
import {Line} from "../../../../core/models/Line";

@Component({
  selector: 'app-line-view',
  templateUrl: './line-view.component.html',
  styleUrls: ['./line-view.component.css']
})
export class LineViewComponent implements OnInit {

  @Input() line:Line = new Line(1);
  lineName: string = "";
  constructor(private store: Store<AppState>) {}

  stations$: Observable<Station[]> = new Observable<Station[]>();
  ngOnInit(): void {
    this.lineName = this.line.getLineName();
    this.line.getSteps();
    this.stations$ = this.store.pipe(
      select(selectBusinessLineStations('0'))
    );
  }
}
