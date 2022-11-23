import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PrincipalComponent } from './principal/principal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';
import { ListaDeJuegosComponent } from './lista-de-juegos/lista-de-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    GaleriaComponent,
    PrincipalComponent,
    NotfoundComponent,
    TopJuegosComponent,
    ListaDeJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
