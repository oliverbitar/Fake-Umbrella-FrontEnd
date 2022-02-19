import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { dataService } from '../edit-customer/dataservice.service';

@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.css']
})
export class CustomerDatabaseComponent implements OnInit {
  customers: Customer[];
  id: any;
  cust: Customer;

  constructor(private user:UsersService, private router:Router, private serv:dataService) {
    this.user.getData().subscribe(
      response => {
        this.customers = response;
      }
    );
   }

   delete(id){
    this.user.deleteData(JSON.stringify(id)).subscribe();
    window.location.reload();
   }

   edit(cust){
     
     this.serv.id = cust.id;
     alert(cust.id);
     this.serv.customer = cust;
    this.router.navigate(['/edit']);
   }

  ngOnInit(): void {
    
  }

}


export class Customer{
  //id: number;
  name: string;
  contact: string;
  location: string;
  phoneNb: string;
  employees: number;
}
