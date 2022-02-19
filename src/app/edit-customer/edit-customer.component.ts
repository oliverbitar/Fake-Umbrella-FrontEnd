import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { dataService } from './dataservice.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  cust: Customer = new Customer;
  customer:Customer;
  id: any;

  constructor(private serv:dataService, private user: UsersService, private router: Router ) { }

  ngOnInit(): void {
    this.id = this.serv.id;

    (<HTMLInputElement>document.getElementById("name")).value = this.serv.customer.name;
    (<HTMLInputElement>document.getElementById("info")).value = this.serv.customer.contact;
    (<HTMLInputElement>document.getElementById("location")).value = this.serv.customer.location;
    (<HTMLInputElement>document.getElementById("phone")).value = this.serv.customer.phoneNb;
    (<HTMLInputElement>document.getElementById("number")).value = (this.serv.customer.employees).toString();
    
  }

  onEdit(){
    this.customer = {
      name: (<HTMLInputElement>document.getElementById("name")).value,
      contact: (<HTMLInputElement>document.getElementById("info")).value,
      location: (<HTMLInputElement>document.getElementById("location")).value,
      phoneNb: (<HTMLInputElement>document.getElementById("phone")).value,
      employees: parseInt((<HTMLInputElement>document.getElementById("number")).value)
    };

    this.user.updateData(this.id, this.customer).subscribe();
    this.router.navigate(['/customerdb']).then(() => {
     window.location.reload();
    });
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

