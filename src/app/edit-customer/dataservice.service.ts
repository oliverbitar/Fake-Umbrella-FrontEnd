import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class dataService {
    customer: Customer;
    id: any;
}

export class Customer{
    //id: number;
    name: string;
    contact: string;
    location: string;
    phoneNb: string;
    employees: number;
  }
  