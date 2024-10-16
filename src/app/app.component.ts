import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Team} from "./interFaces/team";
import {NgForOf, NgIf} from "@angular/common";
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamListItemComponent} from "./team-list-item/team-list-item.component";
import {TeamServiceService} from "./services/team-service.service";

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, TeamListComponent, TeamListItemComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'KareemAljandaliLearningAngular';
  name : string = 'Kareem Aljandali';
  number : string = '19.5';
  team: Team | undefined;
  constructor(private teamService: TeamServiceService){

  }
  ngOnInit() {
    this.teamService.getTeamById(3).subscribe(team => (this.team =team))
  }

  // soccerTeams: Team[] = [
  //   {id:1, name:"Barcelona", league:"Laliga", bestPlayer:"Messi", winsChampionship:true},
  //   {id:2, name:"Real Madrid", league:"Laliga", bestPlayer:"Ronaldo", winsChampionship:true},
  //   {id:3, name:"Man City", league:"Primer League", bestPlayer:"Kevin", winsChampionship:true},
  //   {id:4, name:"Liverpool", league:"Primer league", bestPlayer:"Salah", winsChampionship:true},
  //   {id:5, name:"Man United", league:"Primer league", bestPlayer:"Bruno", winsChampionship:true},
  //   {id:6, name:"Arsenal", league:"Primer league", bestPlayer:"Odegard", winsChampionship:true}
  //
  // ]
  protected readonly TeamListItemComponent = TeamListItemComponent;

}

