import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AjoutEvenementComponent } from './ajout-evenement/ajout-evenement.component';
import { ModifierEvenementComponent } from './modifier-evenement/modifier-evenement.component';
import { SupprimerEvenementComponent } from './supprimer-evenement/supprimer-evenement.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TournoiComponent } from './tournoi/tournoi.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EquipeComponent } from './equipe/equipe.component';
import { JoueurComponent } from './joueur/joueur.component';
import { AjoutTournoiComponent } from './ajout-tournoi/ajout-tournoi.component';
@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    AjoutEvenementComponent,
    ModifierEvenementComponent,
    SupprimerEvenementComponent,
    LoginComponent,
    TournoiComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    EquipeComponent,
    JoueurComponent,
    AjoutTournoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
