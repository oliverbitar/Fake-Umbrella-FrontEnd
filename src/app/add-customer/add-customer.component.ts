import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

export class Customer{
  name: string;
  contact: string;
  location: string;
  phoneNb: string;
  employees: number;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {
  name: string;
  info: string;
  location: string;
  phone: string;
  number: string;
  cust: Customer;

  constructor(private user:UsersService, private router:Router) {
   }


  ngOnInit(): void {
    
  }

  onAdd(){
      this.cust = {
        name: this.name,
        contact: this.info,
        location: this.location,
        phoneNb: this.number,
        employees: parseInt(this.number)
      };
      
      this.user.sendData(this.cust).subscribe();
      this.router.navigate(['/customerdb']).then(() => {
       window.location.reload();
      });

    }
  }