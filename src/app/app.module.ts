import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello-component/hello-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CharteGraphiqueComponent } from './charte-graphique/charte-graphique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiaporamaComponent } from './diaporama/diaporama.component';
import { BarreDeRechercheComponent } from './barre-de-recherche/barre-de-recherche.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CharteGraphiqueComponent,
    DiaporamaComponent,
    BarreDeRechercheComponent,

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
