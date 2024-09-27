import { Component } from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListItemComponent} from "../team-list-item/team-list-item.component";

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [
    TeamListItemComponent
  ],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  soccerTeams: Team[] = [
    {id:1, name:"Barcelona", league:"Laliga", bestPlayer:"Messi", winsChampionship:true},
    {id:2, name:"Real Madrid", league:"Laliga", bestPlayer:"Ronaldo", winsChampionship:true},
    {id:3, name:"Man City", league:"Primer League", bestPlayer:"Kevin", winsChampionship:true},
    {id:4, name:"Liverpool", league:"Primer league", bestPlayer:"Salah", winsChampionship:true},
    {id:5, name:"Man United", league:"Primer league", bestPlayer:"Bruno", winsChampionship:true},
    {id:6, name:"Arsenal", league:"Primer league", bestPlayer:"Odegard", winsChampionship:true}

  ]
}
