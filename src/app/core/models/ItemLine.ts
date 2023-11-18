import {Customer} from "./Company";

export class ItemLine {
  id: string;
  description: string;
  company: Customer;

  constructor(){
    this.id = "";
    this.description = "";
    this.company = new Customer("","","");
  }
}
