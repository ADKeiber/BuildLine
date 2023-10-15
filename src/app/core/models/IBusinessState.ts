import {Line} from "./Line";
import {Station} from "./Station";

export interface BusinessState {
  lines: {
    [id: string]: Line;
  };
  stations: {
    [id: string]: Station;
  };
}
