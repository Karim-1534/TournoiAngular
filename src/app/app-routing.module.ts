import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AjoutEvenementComponent } from './ajout-evenement/ajout-evenement.component';
import { ModifierEvenementComponent } from './modifier-evenement/modifier-evenement.component';
import { SupprimerEvenementComponent } from './supprimer-evenement/supprimer-evenement.component';
import { LoginComponent } from './login/login.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AjoutTournoiComponent } from './ajout-tournoi/ajout-tournoi.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';

const routes: Routes = [
  { path: "evenements/tournoi/:id", component: TournoiComponent },
  { path: "evenements/tournoi/:id/:ev", component: TournoiComponent },
  { path: "evenements", component: EvenementsComponent },
  { path: "ajoutEvenement", component: AjoutEvenementComponent },
  { path: "ajoutTournoi/:id", component: AjoutTournoiComponent },
  { path: "ajoutEquipe", component: AjoutEquipeComponent },
  { path: "modifierEvenement", component: ModifierEvenementComponent },
  { path: "supprimerEvenement", component: SupprimerEvenementComponent },
  { path: "login", component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'evenements', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
