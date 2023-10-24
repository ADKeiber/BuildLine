import {Injectable} from "@angular/core";
import {LinesService} from "../../services/lines.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadLines, loadLinesSuccess, loadStations, loadStationsSuccess} from "../actions/business.actions";
import {map, mergeMap} from "rxjs";
import {Station} from "../../models/Station";
import {StationService} from "../../services/stations.service";
@Injectable()
export class BusinessEffects {
  constructor(private actions$: Actions, private lineService: LinesService, private stationService: StationService) {}

  loadLines$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadLines),
        mergeMap((action) => {
          return this.lineService.getLines().pipe(
            map((lines) => {
              return loadLinesSuccess({lines})
            }));
        })
      );
    });
  loadStations$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadStations),
        mergeMap((action) => {
          // console.log("EFFECT HAPPENING FOR STATIONS")
          return this.stationService.getStations().pipe(
            map((stations) => {
              return loadStationsSuccess({stations})
            }));
        })
      );
    });
}
