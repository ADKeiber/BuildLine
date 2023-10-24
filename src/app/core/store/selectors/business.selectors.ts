// The AppState interface is the state of your Root Reducer.

import { createSelector } from "@ngrx/store";
import { AppState } from '../../models/IAppState'
import {Section} from "../../models/Section";
import {Line} from "../../models/Line";
import {Station} from "../../models/Station";

// This selects the business store slice. So `state.business` is the state returned from the businessReducer.
export const selectBusinessState = (state: AppState) => {
  return state.business;
};
export const selectBusinessLines = createSelector(
  selectBusinessState, state => {
    let lines: Line[] = new Array(0);
    let i = 1;
     state.lines.forEach((value) => {
      lines.push(value);
       i++;
    });
    return lines;
  });
export const selectBusinessStationsWithIds = (ids: string[])  => createSelector(
  selectBusinessState, state => {
    // console.log("IDS: " + ids)
    let stations: Station[] = new Array(0);
    for(let i = 0; i < ids.length; i ++){
      // @ts-ignore
      stations.push(state.stations.get(ids[i]))
      // console.log(state.stations.get(ids[i].toString()))
    }
    // console.log("Stations with ids: ")
    // console.log(stations);
    return stations;
  });

export const selectBusinessStationsWithId = (id: string)  => createSelector(
  selectBusinessState, state => {
    // console.log("station with id: " + state.stations.get(id))
    return state.stations.get(id);
  });


