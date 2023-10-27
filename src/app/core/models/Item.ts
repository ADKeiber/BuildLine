import { ItemStatus } from './ItemStatus';
import { Section } from './Section';
import {ItemLine} from "./ItemLine";
import {PurchaseOrder} from "./PurchaseOrder";
export class Item {
  itemId:String; //
  itemLine: ItemLine;
  name: string; //
  color: string; //
  itemStatus: ItemStatus; //
  purchaseOrder: PurchaseOrder; //
  partQuantity: number; //
  itemDescription: string; //
  currentStepStart: string;
  warningInSeconds: number;
  timeEnteredArea: Date;
  errorInSeconds: number;
  currentSection: Section;
  stationId: string;
  timeInStation : number;

  constructor(id:String, itemName: string, itemColor: string,
    status: ItemStatus, poNumber: string, amtParts:number,
    itemDescripition: string, itemLine:string, currentStepStart:string,timeInStation:number,warningSeconds:number,errorSeconds:number, currentSection: Section, stationId:string){
    this.stationId = stationId;
    this.itemId = id;
    this.name = itemName;
    this.color = itemColor;
    this.itemStatus = status;
    this.purchaseOrder = new PurchaseOrder();
    this.purchaseOrder.purchaseOrderId = poNumber;
    this.purchaseOrder.receivedDate = new Date();
    this.partQuantity = amtParts;
    this.itemDescription = itemDescripition;
    this.currentStepStart = currentStepStart;
    this.warningInSeconds = warningSeconds;
    this.timeInStation = timeInStation;
    this.timeEnteredArea = new Date()
    this.errorInSeconds = errorSeconds;
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
    this.itemStatus = status
  }
}
