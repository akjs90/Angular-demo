import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector:'app-header',
	templateUrl:'./header.component.html'
})
export class HeaderComponent{
	@Output('navigate') navigationEvent:EventEmitter<number>=new EventEmitter<number>();
	
	onShoppingListSelect(){
		this.navigationEvent.emit(1);
	}

	onRecipesSelect(){
		this.navigationEvent.emit(0);
	}
}