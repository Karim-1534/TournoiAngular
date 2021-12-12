import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AjoutEvenementComponent } from './ajout-evenement/ajout-evenement.component';
import { ModifierEvenementComponent } from './modifier-evenement/modifier-evenement.component';
import { SupprimerEvenementComponent } from './supprimer-evenement/supprimer-evenement.component';
import { LoginComponent } from './login/login.component';
import { TournoiComponent } from './tournoi/tournoi.component';


const routes: Routes = [
  {path : "evenements/tournoi/:id", component : TournoiComponent},
  {path : "evenements", component : EvenementsComponent},
  {path : "ajoutEvenement", component : AjoutEvenementComponent},
  {path : "modifierEvenement", component : ModifierEvenementComponent},
  {path : "supprimerEvenement", component : SupprimerEvenementComponent},
  {path : "login", component : LoginComponent},
  {path : "", redirectTo: "evenements", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
