import {Company} from "./Company";

export class ItemLine {
  id: string;
  description: string;
  company: Company;

  constructor(){
    this.id = "";
    this.description = "";
    this.company = new Company();
  }
}
