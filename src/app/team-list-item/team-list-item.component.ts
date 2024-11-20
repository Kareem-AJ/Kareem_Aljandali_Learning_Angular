import {Component, Input} from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListComponent} from "../team-list/team-list.component";
import {LowerCasePipe, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FavTeamPipe} from "../pipes/fav-team.pipe";

@Component({
  selector: 'app-team-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    FavTeamPipe,
  ],
  templateUrl: './team-list-item.component.html',
  styleUrl: './team-list-item.component.css'
})
export class TeamListItemComponent {
  @Input() soccerTeam? : Team;
}
