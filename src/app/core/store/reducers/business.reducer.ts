import {on} from "@ngrx/store";
import {initialBusinessState} from "../../data/InitBusinessState";
import {BusinessState} from "../../models/IBusinessState";
import {BusinessActions} from "../actions/exports/business-actions";
import {createImmerReducer} from "ngrx-immer/store";
import {Station} from "../../models/Station";
import {Section} from "../../models/Section";
import {ItemStatus} from "../../models/ItemStatus";
import { enableMapSet } from 'immer'

enableMapSet();
export const businessReducer = createImmerReducer(
  initialBusinessState,
  on(BusinessActions.updateStationSections, (state, action): BusinessState => {

    // @ts-ignore
    let station:Station = state.stations.get(action.stationId)

    station.backlogItems = action.backlogItems;
    station.currentItems = action.currentItems;
    station.completedItems = action.completedItems;

    return state;

  }),
  on(BusinessActions.updateItemStatus, (state, action) : BusinessState => {
    // @ts-ignore
    let station: Station = state.stations.get(action.stationId)
    station.expanded = !station.expanded;
    let itemStatus = action.newStatus;
    let itemCopy = JSON.parse(JSON.stringify(action.item));
    itemCopy.status = itemStatus;
    switch(action.oldSection){

      case Section.QUEUE:

        if(!(itemStatus.status == "pushed_back" || itemStatus.status == "not_started")){
          station.backlogItems = station.backlogItems.filter(data => data.itemId != itemCopy.id)
          if(itemStatus.status == "in_progress" || itemStatus.status == "blocked" ){
            itemCopy.currentSection = Section.IN_PROGRESS
            station.currentItems.push(itemCopy)
          } else if (itemStatus.status == "completed"){
            itemCopy.currentSection = Section.COMPLETED
            station.completedItems.push(itemCopy)
          }
        } else {
          let oldItem = station.backlogItems.find(data => data.itemId === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = itemCopy;
        }
        break;

      case Section.IN_PROGRESS:

        if(!(itemStatus.status == "blocked" || itemStatus.status == "in_progress")){
          station.currentItems = station.currentItems.filter(data => data.itemId != itemCopy.id)
          if(itemStatus.status == "pushed_back" || itemStatus.status == "not_started" ){
            itemCopy.currentSection = Section.QUEUE
            station.backlogItems.push(itemCopy)
          } else if (itemStatus.status == "completed"){
            itemCopy.currentSection = Section.COMPLETED
            station.completedItems.push(itemCopy)
          }
        } else {
          let oldItem = station.currentItems.find(data => data.itemId === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = itemCopy;
        }
        break;

      case Section.COMPLETED:

        if(itemStatus.status != "completed" ){
          station.completedItems = station.completedItems.filter(data => data.itemId != itemCopy.id)
          if(itemStatus.status == "pushed_back" || itemStatus.status == "not_started" ){
            itemCopy.currentSection = Section.QUEUE
            station.backlogItems.push(itemCopy)
          } else if (itemStatus.status == "in_progress" || itemStatus.status == "blocked"){
            itemCopy.currentSection = Section.IN_PROGRESS
            station.currentItems.push(itemCopy)
          }
        } else {
          let oldItem = station.completedItems.find(data => data.itemId === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = action.item;
        }
        break;
    }

    return state;

  }),
  on(BusinessActions.updateStationExpanded, (state, action) : BusinessState => {
    // @ts-ignore
    state.stations.get(action.stationId).expanded = action.expanded
    return state;
  }),
  on(BusinessActions.loadLinesSuccess, (state, action) => {
    let stateUpdated: BusinessState = {
      ...state,
      lines:action.lines
    }
    // console.log(stateUpdated);
    return stateUpdated;
  }),
  on(BusinessActions.loadStationsSuccess, (state, action         ) => {
    let stateUpdated: BusinessState = {
      ...state,
      stations:action.stations
    }
    // console.log(stateUpdated);
    return stateUpdated;
  }),
)
