import {createAction, props} from "@ngrx/store";
import {ItemStatus} from "../../models/ItemStatus";
import {Section} from "../../models/Section";
import {Station} from "../../models/Station";
import {Line} from "../../models/Line";
import {Item} from "../../models/Item";

export const updateStationWarnings = createAction(
  "[Business Overview] Update station warnings",
  props<{stationId:string, wasError: boolean}>()
)

export const updateStationErrors = createAction(
  "[Business Overview] Update station errors",
  props<{stationId:string, wasWarning: boolean}>()
)

export const updateStationSections = createAction(
  "[Dashboard Overview] Update station's sections",
  props<{stationId: string, backlogItems: Item[], currentItems: Item[], completedItems: Item[]}>()
)

export const updateItemStatus = createAction(
  "[Dashboard Overview] Update Item's status",
  props<{stationId: string, oldSection: Section, item:Item, newStatus: ItemStatus}>()
)

export const updateStationExpanded = createAction(
  "[Dashboard Overview] Update Station's expanded",
  props<{stationId: string, expanded: boolean}>()
)
