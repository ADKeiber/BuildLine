import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadStations, loadStationsSuccess} from "../actions/business.actions";
import {map, mergeMap} from "rxjs";
import {StationService} from "../../services/stations.service";
@Injectable()
export class StationEffects {
  constructor(private actions$: Actions, private stationService: StationService) {}


}
