import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-next-rain',
  templateUrl: './next-rain.component.html',
  styleUrls: ['./next-rain.component.css']
})
export class NextRainComponent implements OnInit {
  weather: any;
  eta: string;
  RainCusts: RainCust[] = [];
  raincust: RainCust;
  customers: Customer[];

  constructor(private user:UsersService) {

    this.user.getData().subscribe(
      response => {
        this.customers = response;
        for(let j = 0; j<this.customers.length; j++){
          this.user.getWeather(this.customers[j].location).subscribe(
            response => {
              this.weather = response;
              for(let i = 0; i<40; i++){
                if(this.weather.list[i].weather[0].main == 'Rain'){
                  this.raincust = {
                    name: this.customers[j].name,
                    contact: this.customers[j].contact,
                    phoneNb: this.customers[j].phoneNb,
                    eta: this.weather.list[i].dt_txt
                  };
                  this.RainCusts.push(this.raincust);
                  break;
                }
              }
            }
          );
      }
      }
    );
  }

  ngOnInit(): void {
  }
}

export class RainCust{
  // id: number;
   name: string;
   contact: string;
   phoneNb: string;
   eta: string;
 }

 export class Customer{
  //id: number;
  name: string;
  contact: string;
  location: string;
  phoneNb: string;
  employees: number;
}