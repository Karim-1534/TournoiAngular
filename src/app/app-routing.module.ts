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
import { AjoutJoueurComponent } from './ajout-joueur/ajout-joueur.component';
import { ModifierEquipeComponent } from './modifier-equipe/modifier-equipe.component';

const routes: Routes = [
  {path : "evenements/tournoi/:id", component : TournoiComponent},
  {path : "evenements/tournoi/:idEvenement/:idTournoi/:idEquipe", component : EquipeComponent},
  {path : "evenements/tournoi/:ev/:id", component : TournoiComponent},
  {path : "evenements", component : EvenementsComponent},
  {path : "ajoutEvenement", component : AjoutEvenementComponent},
  {path : "modifierEvenement", component : ModifierEvenementComponent},
  {path : "supprimerEvenement", component : SupprimerEvenementComponent},
  {path : "login", component : LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'evenements/tournoi/:id/:ev/:idEquipe/joueur/:id', component: JoueurComponent},
  { path: '', redirectTo: 'evenements', pathMatch: 'full' },
  { path: 'evenements/tournoi/:IdEv/:idTournoi/:idEquipe/AjoutJoueur/:idEquipe', component: AjoutJoueurComponent},
  { path: 'evenements/tournoi/:ev/:idTournoi/ajoutEquipe/:idTournoi', component: AjoutEquipeComponent },
  { path: 'evenements/tournoi/:ev/:idTournoi/:idEquipe/ModifEquip/:idEquipe', component: ModifierEquipeComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
