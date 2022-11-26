import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListaDeJuegosComponent } from './lista-de-juegos/lista-de-juegos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrincipalComponent } from './principal/principal.component';
import { TopJuegosComponent } from './top-juegos/top-juegos.component';

const routes: Routes = [
  {
    path:'',component:PrincipalComponent
  },
  {
    path:'contacto',component:ContactoComponent /*path : significa lo que tenemos que escribir en la url */
  },
  {
    path:'listadejuegos',component:ListaDeJuegosComponent
  },
  {
    path:'topjuegos',component:TopJuegosComponent
  },
  { 
    path:'galeria',component:GaleriaComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
