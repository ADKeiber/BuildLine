import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Line} from "../models/Line";

@Injectable({
  providedIn: 'root',
})
export class LinesService {
  constructor(private http: HttpClient){}

  requestUrl: string = 'http://localhost:8080/line/'

  getLines(): Observable<Map<string, Line>>{
    return this.http.get<Line[]>(this.requestUrl + "getAll")
      .pipe(map((data) => {
        let linesWithId: Map<string,Line> = new Map<string, Line>();
        for(let value of data){
          linesWithId.set(value.lineId, value);
        }
        // console.log("LINE DATA With THEIR IDS: ")
        // console.log(linesWithId)
        return linesWithId;
      }));
  }
}
