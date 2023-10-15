import {Station} from './Station';
export class Line {
  id: number;
  numOfSteps:number;
  lineName: string;
  stepIds: string[];
  constructor(id: number){
    this.id = id;
    if (id == 1) {
      this.lineName = "Primary 'Commerce Lane' Line";
      this.stepIds = ["1", "2", "3", "4", "5", "6"];
    } else {
      this.lineName = "Secondary 'Commerce Lane' Line";
      this.stepIds = ["7", "8", "9", "10", "11", "12"];
    }
    this.numOfSteps = 6;

  }
  public getSteps(){
      return this.stepIds;
  }
  public getLineName(){
    return this.lineName;
  }
}
