import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello-component/hello-component.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ForumComponent } from './forum/forum.component';
import { CoursComponent } from './cours/cours.component';
import { OffresComponent } from './offres/offres.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BarreDeRechercheComponent,
    AccueilComponent,
    ForumComponent,
    CoursComponent,
    OffresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
