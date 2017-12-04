import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amtInput') amount: ElementRef;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
  	let ingredient:Ingredient = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
  	this.ingredientAdded.emit(ingredient);
  }
}
