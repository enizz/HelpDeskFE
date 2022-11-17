import { Component, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(protected service: TicketService) { }
  

  ngOnInit(): void {
  }


    login(name: string): void {
      this.service.userName = name;
    }
  
    logout(): void {
      this.service.userName = "";
    }


}

