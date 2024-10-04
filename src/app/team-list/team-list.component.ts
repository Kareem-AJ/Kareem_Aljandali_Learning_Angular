import {Component, OnInit} from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListItemComponent} from "../team-list-item/team-list-item.component";
import {style} from "@angular/animations";
import {NgClass, NgForOf} from "@angular/common";
import {TeamServiceService} from "../services/team-service.service";
import {soccerTeams} from "../Data/mock-team";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [
    TeamListItemComponent,
    NgForOf,
    NgClass,
  ],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit{
  teamList: Team[] = [];
  constructor(private teamService: TeamServiceService) {
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (data: Team[]) => this.teamList = data
    })
  }
  addTeam(newStudent:Team) : Observable<Team[]>{
    this.teamList.push(newStudent)
    return of(this.teamList);
  }
//Update an Existing user
  updateTeam(updatedTeam: Team): Observable<Team[]> {
    const index = this.teamList.findIndex(team => team.id === updatedTeam.id);
    if (index !== -1) {
      this.teamList[index] = updatedTeam;
    }
    return of(this.teamList);
  }
//Delete: Remove a user by ID
  deleteTeam(teamId: number): Observable<Team[]> {
    this.teamList = this.teamList.filter(team => team.id !== teamId);
    return of(this.teamList);
  }
//Get team by ID
  getTeamById(teamId: number): Observable<Team | undefined> {
    const student = this.teamList.find(team => team.id === teamId);
    return of(student);
  }


  protected readonly soccerTeams = soccerTeams;
}
