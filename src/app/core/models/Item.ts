import { ItemStatus } from './ItemStatus';
import { Section } from './Section';
import {ItemLine} from "./ItemLine";
import {PurchaseOrder} from "./PurchaseOrder";
export class Item {
  id:number; //
  itemLine: ItemLine;
  itemName: string; //
  itemColor: string; //
  status: ItemStatus; //
  purchaseOrder: PurchaseOrder; //
  partQuantity: number; //
  itemDescription: string; //
  currentStepStart: string;
  warningSeconds: number;
  timeInStation: number;
  errorSeconds: number;
  currentSection: Section;
  stationId: string;

  constructor(id:number, itemName: string, itemColor: string,
    status: ItemStatus, poNumber: number, amtParts:number,
    itemDescripition: string, itemLine:string, currentStepStart:string,timeInStation:number,warningSeconds:number,errorSeconds:number, currentSection: Section, stationId:string){
    this.stationId = stationId;
    this.id = id;
    this.itemName = itemName;
    this.itemColor = itemColor;
    this.status = status;
    this.purchaseOrder = new PurchaseOrder();
    this.purchaseOrder.poNumber = poNumber;
    this.purchaseOrder.receivedDate = new Date();
    this.partQuantity = amtParts;
    this.itemDescription = itemDescripition;
    this.currentStepStart = currentStepStart;
    this.warningSeconds = warningSeconds;
    this.timeInStation = timeInStation;
    this.errorSeconds = errorSeconds;
    this.currentSection = currentSection;
    this.itemLine = new ItemLine();
    this.itemLine.description = itemLine;
  }
  public getTimeInStationMinutes(){
    return Math.floor(this.timeInStation / 60);
  }
  public getTimeInStationSeconds(){
    return this.timeInStation % 60;
  }
  setStatus(status: ItemStatus){
    this.status = status
  }
}
