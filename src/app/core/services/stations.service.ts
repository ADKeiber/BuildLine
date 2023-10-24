import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Line} from "../models/Line";
import {Station} from "../models/Station";

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private http: HttpClient){}

  requestUrl: string = 'http://localhost:8080/station/'

  getStations(): Observable<Map<string, Station>>{
    return this.http.get<Station[]>(this.requestUrl + "getAll")
      .pipe(map((data) => {
        // console.log("STATION DATA: ")
        // console.log(data)
        let stationsWithId: Map<string,Station> = new Map<string, Station>();
        for(let value of data){
          stationsWithId.set(value.stationId, value);
        }
        console.log("STATION DATA With THEIR IDS: ")
        console.log(stationsWithId)
        return stationsWithId;
      }));
  }
}
