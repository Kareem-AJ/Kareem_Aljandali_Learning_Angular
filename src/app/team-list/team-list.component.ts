import {Component, OnInit} from '@angular/core';
import {Team} from "../interFaces/team";
import {TeamListItemComponent} from "../team-list-item/team-list-item.component";
import {style} from "@angular/animations";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {TeamServiceService} from "../services/team-service.service";
import {soccerTeams} from "../Data/mock-team";
import {Observable, of} from "rxjs";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [
    TeamListItemComponent,
    NgForOf,
    NgClass,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent implements OnInit{
  teamList: Team[] = [];
  constructor(private teamService: TeamServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (data: Team[]) => this.teamList = data
    })
  }

  onEdit(){
    this.router.navigate(['/form'])
  }

}
