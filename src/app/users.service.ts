import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "http://localhost:3000/user";
    return this.http.get<Customer[]>(url);
  }
}
export class Customer{
  id: number;
  name: string;
  contact: string;
  phoneNb: string;
  employees: number;
}

