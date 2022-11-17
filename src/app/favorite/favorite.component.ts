import { Component, OnInit } from '@angular/core';
import { Favorite } from '../interfaces/Favorite';
import { TicketService } from '../ticket.service';

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
}
