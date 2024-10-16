import {provideRouter, Routes} from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {TeamListComponent} from "./app/team-list/team-list.component";
import {TeamListItemComponent} from "./app/team-list-item/team-list-item.component";


const routes: Routes = [
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/:id', component: TeamListItemComponent},
]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
