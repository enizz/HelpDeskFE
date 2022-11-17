import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path: 'ticket', component: TicketComponent},
  {path: 'home', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
