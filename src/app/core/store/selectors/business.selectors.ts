// The AppState interface is the state of your Root Reducer.

import { createSelector } from "@ngrx/store";
import { AppState } from '../../models/IAppState'
import {Section} from "../../models/Section";

// This selects the business store slice. So `state.business` is the state returned from the businessReducer.
export const selectBusinessState = (state: AppState) => {
  return state.business;
};
export const selectBusinessLines = createSelector(
  selectBusinessState, state => {
    console.log(state)
    return Object.keys(state.lines).map(lineID => state.lines[lineID])
  });


export const selectBusinessStationEntities = createSelector(
  selectBusinessState,
  (state) => state.stations
);

export const selectLine = (lineID: string) =>
  createSelector(selectBusinessState, (state) => state.lines[lineID]);

export const selectBusinessLineStations = (lineID: string) =>
  createSelector(selectBusinessStationEntities, selectLine(lineID), (stations, line) =>
    line.stepIds.map((stationID) => stations[stationID])
  );

