import {ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {ItemStatus} from "../../../../core/models/ItemStatus";
import {Item} from "../../../../core/models/Item";
import {Section} from "../../../../core/models/Section";
import {BusinessState} from "../../../../core/models/IBusinessState";
import {Store} from "@ngrx/store";
import {
  updateItemStatus,
  updateStationErrors,
  updateStationWarnings
} from "../../../../core/store/actions/business.actions";
import {interval} from "rxjs";
import {MessageService, TreeNode} from "primeng/api";

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit, DoCheck {

  @Input() item: Item = new Item("1", "", "", ItemStatus.not_started, "1", 1, "", "", "", 0, 0, 0,Section.COMPLETED,"0");
  @Input() stationId: string = "";
  constructor(private _changeRef: ChangeDetectorRef, private store: Store<BusinessState>) { }

  options!: TreeNode[];
  selectedOption!: TreeNode;

  statusOptions = [
    {status:"Completed"},
    {status:"Not Started"},
    {status:"Pushed Back"},
    {status:"In Progress"},
    {status:"Blocked"}
  ];

  currentStatus = {status:this.item.itemStatus}

  timeInStationMinutes: number = 0;
  timeInStationSeconds: number = 0;

  timeInSecondsOnlyOriginal:number = 0;
  currentTimeInSeconds:number = 0;
  warningTime: number = 0;
  errorTime: number = 0;

  errorTrigger: boolean = false;
  warningTrigger: boolean = false;
  completedTrigger: boolean = false;
  oldWTrigger: boolean = false;
  oldETrigger:boolean = false;
  ngOnInit(): void {
    this.timeInStationMinutes = this.item.getTimeInStationMinutes();
    this.timeInStationSeconds = this.item.getTimeInStationSeconds();
    console.log("Item info: ")
    console.log(this.item)
    this.timeInSecondsOnlyOriginal = this.item.timeInStation;
    this.currentTimeInSeconds = this.timeInSecondsOnlyOriginal;
    this.warningTime = this.item.warningInSeconds;
    this.errorTime = this.item.errorInSeconds;
    this.currentStatus = {status:this.item.itemStatus}
    //warning check
    if ((this.currentTimeInSeconds >= this.warningTime && this.currentTimeInSeconds < this.errorTime)
      && (this.item.itemStatus != ItemStatus.not_started && this.item.itemStatus != ItemStatus.pushed_back && this.item.itemStatus != ItemStatus.blocked)) {
      this.warningTrigger = true;
      // this.store.dispatch(updateStationWarnings({ station: this.station, wasError: false }));
    }
    if ((this.currentTimeInSeconds >= this.warningTime && this.currentTimeInSeconds < this.errorTime)
      && (this.item.itemStatus != ItemStatus.not_started && this.item.itemStatus != ItemStatus.pushed_back && this.item.itemStatus != ItemStatus.blocked && this.item.itemStatus != ItemStatus.completed)) {
      if (!this.warningTrigger) {
        // this.store.dispatch(updateStationWarnings({ station: this.station, wasError: false }));
      }
      this.warningTrigger = true;
      this.errorTrigger = false;
      this.completedTrigger = false;
    }
    //error check
    if ((this.currentTimeInSeconds >= this.errorTime || this.item.itemStatus == ItemStatus.blocked) && (this.item.itemStatus != ItemStatus.not_started && this.item.itemStatus != ItemStatus.pushed_back && this.item.itemStatus != ItemStatus.completed)) {
      // this.station.errors++;
      // this.store.dispatch(updateStationErrors({ stationId: this.stationId, wasWarning: this.warningTrigger }));
      this.warningTrigger = false;
      this.errorTrigger = true;
      this.completedTrigger = false;
    }
    if (this.item.itemStatus == ItemStatus.completed) {
      this.warningTrigger = false;
      this.errorTrigger = false;
      this.completedTrigger = true;
    }
    if (this.warningTrigger) {
      this.store.dispatch(updateStationWarnings({ stationId: this.stationId, wasError: false }));
    }else  if (this.errorTrigger) {
      this.store.dispatch(updateStationErrors({ stationId: this.stationId, wasWarning: false}));
    }
    if (this.completedTrigger) {

    }
    this.updateBreakdown();
    this.classChanger();
  }
  classChanger() {
    const obs$ = interval(1000);
    obs$.subscribe((data) => {

      if (!this.completedTrigger) {
        this.currentTimeInSeconds = this.timeInSecondsOnlyOriginal + data;
        this.updateBreakdown();
      }
      this.warningTrigger = false;
      this.errorTrigger = false;
      this.completedTrigger = false;
      //warning check
      if ((this.currentTimeInSeconds >= this.warningTime && this.currentTimeInSeconds < this.errorTime)
        && (this.item.itemStatus != ItemStatus.not_started && this.item.itemStatus != ItemStatus.pushed_back && this.item.itemStatus != ItemStatus.blocked && this.item.itemStatus != ItemStatus.completed)) {
        this.warningTrigger = true;
        this.errorTrigger = false;
        this.completedTrigger = false;

      }
      //error check
      if ((this.currentTimeInSeconds >= this.errorTime || this.item.itemStatus == ItemStatus.blocked)
        && (this.item.itemStatus != ItemStatus.not_started && this.item.itemStatus != ItemStatus.pushed_back && this.item.itemStatus != ItemStatus.completed)) {
        this.warningTrigger = false;
        this.errorTrigger = true;
        this.completedTrigger = false;
      }
      //completed check
      if (this.item.itemStatus == ItemStatus.completed ) {
        this.warningTrigger = false;
        this.errorTrigger = false;
        this.completedTrigger = true;
      }
    })
  }
  ngDoCheck(): void {
    if (this.oldWTrigger != this.warningTrigger) {
      this.oldWTrigger = this.warningTrigger;
      this._changeRef.detectChanges();
    }
    if (this.oldETrigger != this.errorTrigger) {
      this.oldETrigger = this.errorTrigger;
      this._changeRef.detectChanges();
    }
  }
  itemClick(event:any){
    event.stopPropagation();
  }
  updateBreakdown(){
    this.timeInStationMinutes = Math.floor(this.currentTimeInSeconds / 60);
    this.timeInStationSeconds= this.currentTimeInSeconds % 60;
  }
  updateStatus(){
    // console.log("Current Status: " + this.currentStatus.status)
    this.store.dispatch(updateItemStatus({stationId: this.stationId, oldSection: this.item.currentSection, item:this.item, newStatus:this.currentStatus.status}))
  }
}
