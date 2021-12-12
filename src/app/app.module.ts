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

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    AjoutEvenementComponent,
    ModifierEvenementComponent,
    SupprimerEvenementComponent,
    LoginComponent,
    TournoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
