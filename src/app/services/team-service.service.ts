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
  addTeam(newStudent:Team) : Observable<Team[]>{
    this.teams.push(newStudent)
    return of(this.teams);
  }
//Update an Existing user
  updateTeam(updatedTeam: Team): Observable<Team[]> {
    const index = this.teams.findIndex(team => team.id === updatedTeam.id);
    if (index !== -1) {
      this.teams[index] = updatedTeam;
    }
    return of(this.teams);
  }
//Delete: Remove a user by ID
  deleteTeam(teamId: number): Observable<Team[]> {
    this.teams = this.teams.filter(team => team.id !== teamId);
    return of(this.teams);
  }
//Get team by ID
  getTeamById(teamId: number): Observable<Team | undefined> {
    const student = this.teams.find(team => team.id === teamId);
    return of(student);
  }
}
