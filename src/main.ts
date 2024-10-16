import {provideRouter, Routes} from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {TeamListComponent} from "./app/team-list/team-list.component";
import {TeamListItemComponent} from "./app/team-list-item/team-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes = [
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/:id', component: TeamListItemComponent},
  { path: 'modify-team', component: ModifyListItemComponent},
  { path: '**', component: PageNotFoundComponent},
]
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
