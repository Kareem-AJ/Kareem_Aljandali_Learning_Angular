import {Component, Input} from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListComponent} from "../team-list/team-list.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-team-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
  ],
  templateUrl: './team-list-item.component.html',
  styleUrl: './team-list-item.component.css'
})
export class TeamListItemComponent {
  @Input() soccerTeam? : Team;
}
