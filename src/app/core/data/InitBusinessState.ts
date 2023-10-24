import {BusinessState} from "../models/IBusinessState";
import {Station} from "../models/Station";
import {Line} from "../models/Line";

let line1: Line = new Line("1");
line1.stationIds = ["1", "2", "3", "4", "5", "6"];
let line2: Line = new Line("2");
line2.stationIds = ["7", "8", "9", "10", "11", "12"];
let station1: Station = new Station("1", "cut");
let station2: Station = new Station("2", "sew");
let station3: Station = new Station("3", "stitch");
let station4: Station = new Station("4", "fit");
let station5: Station = new Station("5", "check");
let station6: Station = new Station("6", "qa");
let station7: Station = new Station("7", "cut");
let station8: Station = new Station("8", "sew");
let station9: Station = new Station("9", "stitch");
let station10: Station = new Station("10", "fit");
let station11: Station = new Station("11", "check");
let station12: Station = new Station("12","qa");
export const initStations: Station[] = [
  station1, station2, station3, station4, station5, station6, station7,
  station8, station9, station10, station11, station12,
]

// export const initialBusinessState:BusinessState = {
//   lines: {
//     "0": line1,
//     "1": line2
//   },
//   stations: {
//     "1": station1,
//     "2": station2,
//     "3": station3,
//     "4": station4,
//     "5": station5,
//     "6": station6,
//     "7": station7,
//     "8": station8,
//     "9": station9,
//     "10": station10,
//     "11": station11,
//     "12": station12,
//   },
// }
export const initialBusinessState:BusinessState = {
  lines: new Map<string, Line>(),
  stations: new Map<string, Station>(),
}
