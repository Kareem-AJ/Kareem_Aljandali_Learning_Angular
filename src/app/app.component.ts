import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Team} from "./interFaces/team";

// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KareemAljandaliLearningAngular';
  name : string = 'Kareem Aljandali';
  number : string = '19.5';


}

