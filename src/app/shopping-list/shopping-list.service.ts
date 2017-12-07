import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients: Ingredient[]=[
		new Ingredient('Apples',5),
		new Ingredient('Tomatoes',3)
	];

	ingredientsChanged=new EventEmitter<Ingredient[]>();

	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	getIngredientList():Ingredient[]{
		return this.ingredients.slice();
	}

	addIngredientsToList(ingredients:Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}