import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Team} from "./interFaces/team";
import {NgForOf, NgIf} from "@angular/common";

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KareemAljandaliLearningAngular';
  name : string = 'Kareem Aljandali';
  number : string = '19.5';

  soccerTeams: Team[] = [
    {id:1, name:"Barcelona", league:"Laliga", bestPlayer:"Messi", winsChampionship:true},
    {id:2, name:"Real Madrid", league:"Laliga", bestPlayer:"Ronaldo", winsChampionship:true},
    {id:3, name:"Man City", league:"Primer League", bestPlayer:"Kevin", winsChampionship:true},
    {id:4, name:"Liverpool", league:"Primer league", bestPlayer:"Salah", winsChampionship:true},
    {id:5, name:"Man United", league:"Primer league", bestPlayer:"Bruno", winsChampionship:true},
    {id:6, name:"Arsenal", league:"Primer league", bestPlayer:"Odegard", winsChampionship:true}

  ]
}

