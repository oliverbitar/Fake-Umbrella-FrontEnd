import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.css']
})
export class CustomerDatabaseComponent implements OnInit {
  customers: Customer[];
  
  constructor(private user:UsersService) {
    this.user.getData().subscribe(
      response => {
        this.customers = response;
      }
      
    );
   }

  ngOnInit(): void {
  }

}


export class Customer{
  id: number;
  name: string;
  contact: string;
  phoneNb: string;
  employees: number;
}
