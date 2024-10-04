import { Component } from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListItemComponent} from "../team-list-item/team-list-item.component";
import {style} from "@angular/animations";
import {NgClass, NgForOf} from "@angular/common";
import {TeamServiceService} from "../services/team-service.service";

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
export class TeamListComponent {
  constructor(private teamService: TeamServiceService) {
  }
  protected readonly style = style;
}
