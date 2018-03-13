import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford','Chevrolet','Volkswagen'];
  
  myData(){
	  return 'This is my Service data!';
  }
}
