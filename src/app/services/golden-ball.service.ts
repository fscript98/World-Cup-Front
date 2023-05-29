import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorldCupModel} from "../models/world-cup.model";
import {map} from "rxjs/operators";
import {GoldenBallModel} from "../models/golden-ball.model";

@Injectable({
  providedIn: 'root'
})
export class GoldenBallService {
  urlBase = 'https://localhost:7190/api/goldenBall';

  constructor(private http: HttpClient) { }

  getAll(): Observable<GoldenBallModel[]> {
    return this.http.get<GoldenBallModel[]>(this.urlBase + '/getAll').pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => GoldenBallModel.fromJson(jsonItem))
      )
    );
  }

  getByYear(year): Observable<GoldenBallModel[]>{
    return this.http.get<GoldenBallModel[]>(this.urlBase + '/search?year=' + year).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => GoldenBallModel.fromJson(jsonItem))
      )
    );
  }
}
