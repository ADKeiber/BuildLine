import {Item} from "./Item";
import {Company} from "./Company";
import {ItemLine} from "./ItemLine";

export class PurchaseOrder {
  purchaseOrderId: string;
  price: string;
  description: string;
  itemQuantity: [{
    number:ItemLine
  }]
  receivedDate: Date;
  dueDate: Date;
  business: Company
  items: Item[]
  constructor() {
    this.purchaseOrderId = "1"
    this.price = "0.00"
    this.description = "PO"
    this.itemQuantity = [{ number: new ItemLine() }]
    this.receivedDate = new Date();
    this.dueDate = new Date();
    this.business = new Company();
    this.items = [];
  }
}
