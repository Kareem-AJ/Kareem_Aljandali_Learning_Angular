import {Component, OnInit} from '@angular/core';

import {TeamServiceService} from "../services/team-service.service";
import {FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule} from "@angular/forms";

import {NgIf} from "@angular/common";



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
export class FormComponent {

}
