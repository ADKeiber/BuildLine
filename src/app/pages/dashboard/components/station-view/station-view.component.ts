import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Station} from "../../../../core/models/Station";
import {Item} from "../../../../core/models/Item";
import {AppState} from "../../../../core/models/IAppState";
import {select, Store} from "@ngrx/store";
import {DragulaService} from "ng2-dragula";
import {Observable, Subscription} from "rxjs";
import {updateStationExpanded, updateStationSections} from "../../../../core/store/actions/business.actions";
import {Section} from "../../../../core/models/Section";
import {ItemStatus} from "../../../../core/models/ItemStatus";
import {
  selectBusinessStationWithId
} from "../../../../core/store/selectors/business.selectors";

@Component({
  selector: 'app-station-view',
  templateUrl: './station-view.component.html',
  styleUrls: ['./station-view.component.css']
})
export class StationViewComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  constructor(private store: Store<AppState>, private dragulaService:DragulaService){
  }
  @Input() stationId: String | undefined;
  @Input() lineIndex = "0";
  stationDropName = "";
  station: Station = new Station("", "");

  clicked(event:any){
    event.stopPropagation();
    let newExpanded = !this.station.expanded;
    this.store.dispatch(updateStationExpanded({stationId: this.station.stationId, expanded: newExpanded}))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    // console.log("STATION INFORMATION: " + this.station)
    // this.stationDropName = this.lineIndex + " " + this.station.stationId;
    // console.log("StationID: ")
    // console.log(this.stationId)
    // @ts-ignore
    this.store.pipe(select(selectBusinessStationWithId(this.stationId))).subscribe( station => this.station = station);
    // console.log("Station after pipe: ")
    // console.log(this.station)
    this.subs.add(this.dragulaService.dropModel(this.stationDropName)
      .subscribe((data) => {
        let id = data.item.id

        let backlogItems: Item[] = [];
        let currentItems: Item[] = [];
        let completedItems: Item[] = [];

        let sourceClass = data.source.getAttribute("class");
        let targetClass = data.target.getAttribute("class");


        let item:Item = JSON.parse(JSON.stringify(data.item));
        if(sourceClass != targetClass){
          // @ts-ignore
          if(sourceClass.includes("backlog")){

            backlogItems = data.sourceModel;
            // @ts-ignore
            if(targetClass.includes("current")){
              this.updateItem(Section.IN_PROGRESS, item)
              currentItems = data.targetModel;
              currentItems.splice(data.targetIndex, 1, item)
              completedItems = this.station.completedItems;
            }
            // @ts-ignore
            if(targetClass.includes("completed")){
              this.updateItem(Section.COMPLETED, item)
              completedItems = data.targetModel;
              completedItems.splice(data.targetIndex, 1, item)
              currentItems = this.station.currentItems;
            }
          }
          // @ts-ignore
          if(sourceClass.includes("current")){
            currentItems = data.sourceModel;
            // @ts-ignore
            if(targetClass.includes("backlog")){
              this.updateItem(Section.QUEUE, item)
              backlogItems = data.targetModel;
              backlogItems.splice(data.targetIndex, 1, item)
              completedItems = this.station.completedItems;
            }
            // @ts-ignore
            if(targetClass.includes("completed")){
              this.updateItem(Section.COMPLETED, item)
              completedItems = data.targetModel;
              completedItems.splice(data.targetIndex, 1, item)
              backlogItems = this.station.backlogItems;
            }
          }
          // @ts-ignore
          if(sourceClass.includes("completed")){
            completedItems = data.sourceModel;
            // @ts-ignore
            if(targetClass.includes("backlog")){
              this.updateItem(Section.QUEUE, item)
              backlogItems = data.targetModel;
              backlogItems.splice(data.targetIndex, 1, item)
              currentItems = this.station.currentItems;
            }
            // @ts-ignore
            if(targetClass.includes("current")){
              this.updateItem(Section.IN_PROGRESS, item)
              currentItems = data.targetModel;
              currentItems.splice(data.targetIndex, 1, item)
              backlogItems = this.station.backlogItems;
            }
          }
          this.store.dispatch(updateStationSections({stationId: this.station.stationId, backlogItems: backlogItems, currentItems: currentItems, completedItems: completedItems}))
        }
      })
    );
  }

  /**
   * Updates an item's current section and status based on the new section it will be part of
   *
   * @param newSection  Section that the item is moving to
   * @param item        Item that needs information updated
   */
  private updateItem(newSection: Section, item: Item){
    switch(newSection){
      case Section.COMPLETED:
        item.currentSection = Section.COMPLETED;
        item.status = ItemStatus.completed
        break;
      case Section.IN_PROGRESS:
        item.currentSection = Section.IN_PROGRESS;
        item.status = ItemStatus.in_progress
        break;
      case Section.QUEUE:
        item.currentSection = Section.QUEUE;
        item.status = ItemStatus.pushed_back
        break;
    }
  }
}
