import { Component, destroyPlatform, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-top-four',
  templateUrl: './top-four.component.html',
  styleUrls: ['./top-four.component.css']
})
export class TopFourComponent implements OnInit {
  customers: Customer[];
  redColor: string = 'rgba(255, 99, 132, 0.8)';
  top4Names: string[] = [null,null,null,null];
  top4Number: number[] = [0,0,0,0];
  top4Locations: string[] = [null,null,null,null];
  top4Color: string[] = [this.redColor,this.redColor,this.redColor,this.redColor];
  weather: any;
  myChart: Chart;
  max: number;

  constructor(private user: UsersService) { }

  ngOnInit(): void {
    this.max = 3;
    Chart.register(...registerables);
    this.user.getData().subscribe(
      response => {
        this.customers = response;
        for(let i = 0; i<this.customers.length; i++){
          if(this.customers[i].employees >= this.top4Number[0]){
            this.top4Number[3] = this.top4Number[2];
            this.top4Names[3] = this.top4Names[2];
            this.top4Locations[3] = this.top4Locations[2];
            this.top4Number[2] = this.top4Number[1];
            this.top4Names[2] = this.top4Names[1];
            this.top4Locations[2] = this.top4Locations[1];
            this.top4Number[1] = this.top4Number[0];
            this.top4Names[1] = this.top4Names[0];
            this.top4Locations[1] = this.top4Locations[0];
            this.top4Number[0] = this.customers[i].employees;
            this.top4Names[0] = this.customers[i].name;
            this.top4Locations[0] = this.customers[i].location;
          }
          else if(this.customers[i].employees >= this.top4Number[1]){
            this.top4Number[3] = this.top4Number[2];
            this.top4Names[3] = this.top4Names[2];
            this.top4Locations[3] = this.top4Locations[2];
            this.top4Number[2] = this.top4Number[1];
            this.top4Names[2] = this.top4Names[1];
            this.top4Locations[2] = this.top4Locations[1];
            this.top4Number[1] = this.customers[i].employees;
            this.top4Names[1] = this.customers[i].name;
            this.top4Locations[1] = this.customers[i].location;
          }
          else if(this.customers[i].employees >= this.top4Number[2]){
            this.top4Number[3] = this.top4Number[2];
            this.top4Names[3] = this.top4Names[2];
            this.top4Locations[3] = this.top4Locations[2];
            this.top4Number[2] = this.customers[i].employees;
            this.top4Names[2] = this.customers[i].name;
            this.top4Locations[2] = this.customers[i].location;
          }
          else if(this.customers[i].employees >= this.top4Number[3]){
            this.top4Number[3] = this.customers[i].employees;
            this.top4Names[3] = this.customers[i].name;
            this.top4Locations[3] = this.customers[i].location;
          }
          
        }
        for(let j = 0; j<this.top4Locations.length; j++){
          sleep(50);
          if(this.top4Locations[j] != null){
            this.user.getWeather(this.top4Locations[j]).subscribe(
              response =>{
                this.weather = response;
                for(let i = 0; i<40; i++){
                  if(this.weather.list[i].weather[0].main == 'Rain'){
                    this.top4Color[j] = 'rgba(75, 192, 192, 1)';
                    break;
                  }
                  
                }
                if(j==this.max){
                  this.myChart = new Chart("myChart", {
                    type: 'bar',
                    data: {
                        labels: [this.top4Names[0], this.top4Names[1],this.top4Names[2],this.top4Names[3]],
                        datasets: [{
                            label: '# of employees',
                            data: [this.top4Number[0],this.top4Number[1],this.top4Number[2],this.top4Number[3]],
                            backgroundColor: [
                                this.top4Color[0],
                                this.top4Color[1],
                                this.top4Color[2],
                                this.top4Color[3]
                            ],
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                }
                

              }
              
            
          );
        }
        else{
          this.max = this.max-1;
        }
      }
      }
    );
    
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
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
