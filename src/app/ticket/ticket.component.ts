import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Favorite } from '../interfaces/Favorite';
import { Ticket } from '../interfaces/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets = this.service.tickets

  constructor(protected service: TicketService) { }
  openedBy2: string = "";
  issue2: string = "";
  resolved2: boolean = false;
  favorited2: boolean = false;
  resolution: string = "";
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
  addResolution = (ticket: Ticket): void => {
    this.openedBy2 = ticket.openedBy
    this.issue2 = ticket.issue
    this.resolved2 = true;
    this.favorited2 = ticket.favorited;
    ticket = {openedBy: this.openedBy2, issue: this.issue2, resolvedBy: this.service.userName, resolution: this.resolution, resolved: this.resolved2, favorited: this.favorited2}
    this.service.resolveTicket(ticket).subscribe(() => this.loadTickets())
  }
}
