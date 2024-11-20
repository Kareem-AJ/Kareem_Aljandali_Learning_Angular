import {provideRouter, Routes} from "@angular/router";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {TeamListComponent} from "./app/team-list/team-list.component";
import {TeamListItemComponent} from "./app/team-list-item/team-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {FormComponent} from "./app/form/form.component";


const routes: Routes = [
  {path:'', redirectTo:'/teams', pathMatch:'full'},
  { path: 'teams', component: TeamListComponent},
  { path: 'teams/:id', loadComponent: () => import('./app/team-list-item/team-list-item.component').then(m=>m.TeamListItemComponent)},
  {path: 'form', loadComponent: () => import('./app/form/form.component').then(m=>m.FormComponent)},
  { path: 'modify-team', loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m=>m.ModifyListItemComponent)},
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)},
]
bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
