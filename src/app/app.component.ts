import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	navigateIndex:number;
	constructor(){
		this.navigateIndex=0;
	}
	navigate(index:number){
		this.navigateIndex=index;
	}
}
