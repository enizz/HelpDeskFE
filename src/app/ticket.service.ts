import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ticket } from './interfaces/Ticket';
import { Observable } from 'rxjs';
import { Favorite } from './interfaces/Favorite';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  backendURL: string = 'https://localhost:7127/api';
  userName: string = "";
  tickets: Ticket[] = [];
  favorites: Favorite[] = [];
  loadTickets = (): void => {
    this.getTickets().subscribe((data: Ticket[]) => this.tickets = data);
  }
  loadFavTickets = (): void => {
    this.GetFavorites().subscribe((data: Favorite[]) => this.favorites = data);
  }
  constructor(protected httpClient: HttpClient) { }



  getTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + "/Tickets")
  }
  GetFavorites = (): Observable<Favorite[]> => {
    return this.httpClient.get<Favorite[]>(this.backendURL + "/Favorites")
  }

  postTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.post<Ticket>(this.backendURL + "/Tickets/", ticket)}

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Tickets/" + id)};
  
  postFavorite = (fav: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(this.backendURL + "/Favorites/", fav)
  }
  resolveTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.put<Ticket>(this.backendURL + "/Tickets/", ticket)
  }
  deleteFav = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Favorites/" + id)}
  
  putTicket = (id: number, ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.put<Ticket>(this.backendURL + "/Tickets/"+ id, ticket)}
  }

