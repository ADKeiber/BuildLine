import {Line} from "./Line";
import {Station} from "./Station";

export interface BusinessState {
  lines: Map<string,Line>;
  stations: Map<string, Station>;
}
