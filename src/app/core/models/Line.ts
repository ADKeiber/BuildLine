import {Station} from './Station';

export class Line {
  lineId: string;
  numOfSteps:number;
  lineName: string;
  stationIds: string[];
  constructor(id: string){
    this.lineId = id;
    this.lineName = "";
    this.stationIds = [];
    this.numOfSteps = 0;

  }
  public getSteps(){
      return this.stationIds;
  }
  public getLineName(){
    return this.lineName;
  }
}
