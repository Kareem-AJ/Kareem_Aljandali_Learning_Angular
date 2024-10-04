import { Injectable } from '@angular/core';
import  {soccerTeams} from "../Data/mock-team"
import {Team} from "../interFaces/team";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  private teams: Team[] = soccerTeams;
  getTeams():Observable <Team[]>{
    return of(soccerTeams);
  }

  constructor() { }
}
