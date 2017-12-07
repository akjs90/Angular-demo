import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amtInput') amount: ElementRef;

  constructor(private shopListServ:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ingredientName=this.name.nativeElement.value;
    const ingredientAmount=this.amount.nativeElement.value;
  	const ingredient:Ingredient = new Ingredient(ingredientName,ingredientAmount);
    this.shopListServ.addIngredient(ingredient);
  }
}
