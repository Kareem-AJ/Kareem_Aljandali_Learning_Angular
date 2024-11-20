import {Component, OnInit} from '@angular/core';
import {soccerTeams} from "../Data/mock-team";
import {TeamServiceService} from "../services/team-service.service";
import {FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {Team} from "../interFaces/team";



@Component({
  selector: 'app-modify-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  teamForm: FormGroup;
  team: Team | undefined;
  error: string | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private teamService: TeamServiceService,
    private router: Router
  ){
    this.teamForm = this.fb.group({
      id: [teamService.generateNewId()],
      name: ['', Validators.required],
      league: ['',Validators.required],
      bestPlayer: ['',Validators.required],
      winsChampionship: [false],
      image: [null]
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.teamService.getTeamById(id).subscribe({
        next: team => {
          if (team) {
            this.teamForm.patchValue(team);
          }
        },
        error: err => {
          this.error = 'Error fetching team';
          console.error("error fetching team:", err)
        }
      });
    }
  }
  onSubmit(): void{
    if(this.teamForm.valid){
      const team: Team = this.teamForm.value;
      if (team.id) {
        this.teamService.updateTeam(team).subscribe(() => this.router.navigate(['/teams']));
      } else {
        team.id = this.teamService.generateNewId();
        this.teamService.addTeam(team).subscribe(() => this.router.navigate(['/teams']));
      }
    }
  }

  onAdd():void{
      const team: Team = this.teamForm.value;
      this.teamService.addTeam(team).subscribe(() => this.router.navigate(['/teams']))

  }

  onUpdate():void{
    const id = this.teamForm.value.id;
    if(id){
      this.teamService.updateTeam(id).subscribe(() => this.router.navigate(['/teams']))
    }
  }

  onDelete(): void{
    const id = this.teamForm.value.id;
    if (id) {
      this.teamService.deleteTeam(id).subscribe(() => this.router.navigate(['/teams']));
    }
  }
  navigateToTeamList(): void {
    this.router.navigate(['/teams']);
  }
}
