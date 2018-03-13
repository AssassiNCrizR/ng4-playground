import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,animate,transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
	trigger('myAwesomeAnimation', [
		state('small', style({
			transform: 'scale(1)',
		})),
		state('large', style({
			transform: 'scale(2)',
		})),
		
		transition('small <=> large', animate('300ms ease-in')),
	]),
  ]
})
export class AppComponent {
	
	state:string = 'small';
	
	animateMe(){
		this.state == (this.state === 'small' ? 'large' : 'small');
	}
	constructor(private dataservice:DataService){
	
	}
	
	someProperty:string = '';
	
	ngOnInit(){
		console.log(this.dataservice.cars);
		this.someProperty = this.dataservice.myData();
	}
	
  myObject = {
	  gender: 'male',
	  age: 21,
	  location: 'India'
  }
  
  myArr = ['Invoker','Clinkz','Viper'];
  myBool = true;
  angularLogo = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
  buttonStatus = 'enabled';
  myEvent(event){
	  console.log(event);
  }
  dynamicClasses = {
	  'changeColor': true,
	  'changeTextColor': true
  }
  borderStyles = {
	  'border-color': 'black',
	  'border-width': '2px'
  }
}
