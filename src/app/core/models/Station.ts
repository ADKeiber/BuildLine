import { Item } from "./Item";
import { ItemStatus } from "./ItemStatus";
import { Section } from "./Section";
export class Station{
  currentItems: Item[];
  backlogItems: Item[];
  completedItems: Item[];
  stationId: string;
  name: string;
  warnings: number;
  errors: number;
  stationWorker: string;
  expanded: boolean;
  constructor(stationId: string, name: string) {
    this.warnings = 0;
    this.errors = 0;
    this.stationId = stationId;
    this.name = name;
    this.backlogItems = [new Item("3", "704829-BB", "Black", ItemStatus.not_started, "123456", 6, "Flying Cloud Sofa", "Flying Cloud", "May 6, 2022 10:58", 0, 5, 10,Section.QUEUE,stationId)];
    this.currentItems = [new Item("1","704829-BB","Black",ItemStatus.blocked,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",0,5,10,Section.IN_PROGRESS,stationId),
              new Item("2","704829-BB","Black",ItemStatus.in_progress,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",0,5,10,Section.IN_PROGRESS,stationId)];
    this.completedItems = [new Item("4","704829-BB","Black",ItemStatus.completed,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",120,130,140,Section.COMPLETED,stationId),
    new Item("5","704829-BB","Black",ItemStatus.completed,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",0,5,10,Section.COMPLETED,stationId),
    new Item("6","704829-BB","Black",ItemStatus.completed,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",0,5,10,Section.COMPLETED,stationId),
    new Item("7","704829-BB","Black",ItemStatus.completed,"123456",6,"Flying Cloud Sofa","Flying Cloud","May 6, 2022 10:58",0,5,10,Section.COMPLETED,stationId)];
    this.stationWorker = ""
    this.expanded = false;
  }
}
