import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  name: String;
  info: String;
  phone: String;
  number: String;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){

    }
  }
