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

  constructor(protected httpClient: HttpClient) { }

  

  getTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(this.backendURL + "/Tickets")
  }
  getFavTickets = (): Observable<Favorite[]> => {
    return this.httpClient.get<Favorite[]>(this.backendURL + "/Favorites")
  }

  // createTicket = (name: string, issue: string): Observable<Ticket> => {
  //   return this.httpClient.post<Ticket>(this.backendURL + "/ticket", name);
  // }
  postTicket = (ticket: Ticket): Observable<Ticket> => {
    // return this.httpClient.post<Ticket>(`${this.backendURL}/Tickets`, ticket)
    return this.httpClient.post<Ticket>(this.backendURL + "/Tickets", ticket)}

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/Tickets/" + id)};
  
  postFavorite = (fav: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(this.backendURL + "/Favorites", fav)
  }
  }

