import {PreloadingStrategy, Route} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>){
    if (route.data && route.data["preload"]) {
      return load();
    }
    return of(null);
  }
}
