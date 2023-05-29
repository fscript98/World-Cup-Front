import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorldCupModel} from "../models/world-cup.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  urlBase = 'https://localhost:7190/api/worldCup';

  constructor(private http: HttpClient) { }

  getAll(): Observable<WorldCupModel[]> {
    return this.http.get<WorldCupModel[]>(this.urlBase + '/getAll').pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => WorldCupModel.fromJson(jsonItem))
      )
    );
  }
}
