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
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { EquipeComponent } from './equipe/equipe.component';
import { JoueurComponent } from './joueur/joueur.component';
import { GestionUSerComponent } from './gestion-user/gestion-user.component';

const routes: Routes = [
  
  {path : "evenements/tournoi/:id/:ev/:idequipe", component : EquipeComponent},
  {path : "evenements/tournoi/:id/:ev", component : TournoiComponent},
  {path : "evenements", component : EvenementsComponent},
  {path : "ajoutEvenement", component : AjoutEvenementComponent},
  {path : "modifierEvenement", component : ModifierEvenementComponent},
  {path : "supprimerEvenement", component : SupprimerEvenementComponent},
  {path : "evenements/tournoi/:id/:ev/ajoutEquipe" , component : AjoutEquipeComponent},
  {path : "login", component : LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: GestionUSerComponent },
  { path: 'evenements/tournoi/:id/:ev/:idequipe/joueur/:id', component: JoueurComponent},
  { path: '', redirectTo: 'evenements', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
