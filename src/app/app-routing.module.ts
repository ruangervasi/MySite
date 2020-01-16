import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
