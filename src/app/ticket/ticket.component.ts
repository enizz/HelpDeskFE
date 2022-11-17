import { Component, OnInit } from '@angular/core';
import { FavoriteComponent } from '../favorite/favorite.component';
import { Favorite } from '../interfaces/Favorite';
import { Ticket } from '../interfaces/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(protected service: TicketService) { }

  newIssue: string = "";
  currentIssue: string = ""; 
  currentIndex: any
  newTicket: Ticket = {
    openedBy: "",
    issue: "",
    resolvedBy: "",
    resolution: "",
    resolved: false,
    favorited: false
  }
  newFav: Favorite = {
    ticketid: 0,
    favoritedby: ""
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets = (): void => {
    this.service.getTickets().subscribe((data: Ticket[]) => this.tickets = data);
  }
  addTicket = (ticket: Ticket): void => {
    ticket = {openedBy: this.service.userName, issue: this.newIssue, resolvedBy: "", resolution: "", resolved: false, favorited: false }
    this.service.postTicket(ticket).subscribe(() => this.loadTickets())
  }
  removeTicket = (id: number): void => {
    this.service.deleteTicket(id).subscribe(() => this.loadTickets());
  }
  displayIssue(t: Ticket): void {
    this.currentIssue = t.issue;
    this.currentIndex = t.id
  }
  addFavorite = (ticket: Ticket): void => {
    this.newFav = {favoritedby: this.service.userName, ticketid: ticket.id!}
    this.service.postFavorite(this.newFav).subscribe(()=> this.loadTickets())
  }
}
