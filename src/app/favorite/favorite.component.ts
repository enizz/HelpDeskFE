import { Component, OnInit } from '@angular/core';
import { Favorite } from '../interfaces/Favorite';
import { TicketService } from '../ticket.service';
import { Ticket } from '../interfaces/Ticket';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favTickets: Favorite[] = [];

  constructor(protected service: TicketService) { }

  ngOnInit(): void {
    this.loadFavTickets();
  }

  loadFavTickets = (): void => {
    this.service.getFavTickets().subscribe((data: Favorite[]) => this.favTickets = data);
  }
  removeFav = (id: number): void => {
    this.service.deleteFav(id).subscribe(() => this.loadFavTickets())
  }
}
