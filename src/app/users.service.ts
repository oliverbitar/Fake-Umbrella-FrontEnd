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

  sendData(newCust: Customer){
    let url = "http://localhost:3000/user";
    return this.http.post(url,newCust);
  }

  deleteData(id: any){
    let url = "http://localhost:3000/user/" + id;
    return this.http.delete(url);
  }

  updateData(id: any,newCust: Customer){
    let url = "http://localhost:3000/user/" + id;
    return this.http.put(url,newCust);
  }

  getWeather(city: string){
    let url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=a9743f3872b744f135bf1e69c5ee6d63"
    return this.http.get(url);
  }

}
export class Customer{
 // id: number;
  name: string;
  contact: string;
  location: string;
  phoneNb: string;
  employees: number;
}

