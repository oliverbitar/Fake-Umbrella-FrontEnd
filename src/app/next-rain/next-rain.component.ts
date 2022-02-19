import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-next-rain',
  templateUrl: './next-rain.component.html',
  styleUrls: ['./next-rain.component.css']
})
export class NextRainComponent implements OnInit {
  weather: any;
  eta: Promise<string>;
  i: number;
  RainCusts: RainCust[];
  customers: Customer[];

  constructor(private user:UsersService) {
    // this.user.getWeather('Toronto').subscribe(
    //   response => {
    //     this.weather = response;
    //   }
    // );
    this.user.getData().subscribe(
      response => {
        this.customers = response;
        this.eta = this.checkForRain(this.customers[3].location);
        alert(this.eta);
      }
    );
   }

  ngOnInit(): void {
  }

  checkMe(){

    // alert(this.customers[0].name);
    // this.Rain = false;
    // this.i = 0;
    // while(this.Rain == false && this.i <= 39){
    //   if(this.weather.list[this.i].weather[0].main == 'Snow'){
    //     console.warn('Rah tchatte');
    //     this.eta = this.weather.list[this.i].dt_txt;
    //     console.warn(this.eta);
    //     this.Rain = true;
    //   }
    //   this.i++;
    // }

    // if(this.Rain == false)
    //   console.warn('not gonna rain');
  }

  async checkForRain(city:string){
    this.i=0;
    this.eta="No Rain";
    await this.user.getWeather(city).subscribe(
      response => {
        this.weather = response;
        while(this.i <= 39){
          console.warn(this.weather.list[this.i].weather[0].main);
          if(this.weather.list[this.i].weather[0].main == 'Rain'){
            alert('its raining');
            this.eta = this.weather.list[this.i].dt_txt;
            alert(this.eta);
            return this.eta;
          }
          this.i++;
        }
      }
    );
    alert('its not raining');
    return this.eta;
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
