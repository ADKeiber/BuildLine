import {on} from "@ngrx/store";
import {initialBusinessState} from "../../data/InitBusinessState";
import {BusinessState} from "../../models/IBusinessState";
import {BusinessActions} from "../actions/exports/business-actions";
import {createImmerReducer} from "ngrx-immer/store";
import {Station} from "../../models/Station";
import {Section} from "../../models/Section";
import {ItemStatus} from "../../models/ItemStatus";
import {updateStationExpanded} from "../actions/business.actions";

export const businessReducer = createImmerReducer(
  initialBusinessState,
  on(BusinessActions.updateStationSections, (state, action): BusinessState => {

    let station:Station = state.stations[action.stationId]

    station.backlogItems = action.backlogItems;
    station.currentItems = action.currentItems;
    station.completedItems = action.completedItems;

    return state;

  }),
  on(BusinessActions.updateItemStatus, (state, action) : BusinessState => {
    let station: Station = state.stations[action.stationId]
    station.expanded = !station.expanded;
    let itemStatus = action.newStatus;
    let itemCopy = JSON.parse(JSON.stringify(action.item));
    itemCopy.status = itemStatus;
    switch(action.oldSection){

      case Section.QUEUE:

        if(!(itemStatus == ItemStatus.pushed_back || itemStatus == ItemStatus.not_started)){
          station.backlogItems = station.backlogItems.filter(data => data.id != itemCopy.id)
          if(itemStatus == ItemStatus.in_progress || itemStatus == ItemStatus.blocked ){
            itemCopy.currentSection = Section.IN_PROGRESS
            station.currentItems.push(itemCopy)
          } else if (itemStatus == ItemStatus.completed){
            itemCopy.currentSection = Section.COMPLETED
            station.completedItems.push(itemCopy)
          }
        } else {
          let oldItem = station.backlogItems.find(data => data.id === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = itemCopy;
        }
        break;

      case Section.IN_PROGRESS:

        if(!(itemStatus == ItemStatus.blocked || itemStatus == ItemStatus.in_progress)){
          station.currentItems = station.currentItems.filter(data => data.id != itemCopy.id)
          if(itemStatus == ItemStatus.pushed_back || itemStatus == ItemStatus.not_started ){
            itemCopy.currentSection = Section.QUEUE
            station.backlogItems.push(itemCopy)
          } else if (itemStatus == ItemStatus.completed){
            itemCopy.currentSection = Section.COMPLETED
            station.completedItems.push(itemCopy)
          }
        } else {
          let oldItem = station.currentItems.find(data => data.id === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = itemCopy;
        }
        break;

      case Section.COMPLETED:

        if(itemStatus != ItemStatus.completed ){
          station.completedItems = station.completedItems.filter(data => data.id != itemCopy.id)
          if(itemStatus == ItemStatus.pushed_back || itemStatus == ItemStatus.not_started ){
            itemCopy.currentSection = Section.QUEUE
            station.backlogItems.push(itemCopy)
          } else if (itemStatus == ItemStatus.in_progress || itemStatus == ItemStatus.blocked){
            itemCopy.currentSection = Section.IN_PROGRESS
            station.currentItems.push(itemCopy)
          }
        } else {
          let oldItem = station.completedItems.find(data => data.id === itemCopy.id)
          station.expanded = !station.expanded;
          oldItem = action.item;
        }
        break;
    }

    return state;

  }),
  on(BusinessActions.updateStationExpanded, (state, action) : BusinessState => {
    state.stations[action.stationId].expanded = action.expanded
    return state;
  }),
)
