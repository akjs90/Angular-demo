import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

	recipeSelected:EventEmitter<Recipe>;

	constructor(private slService:ShoppingListService){
		//console.log('contructor service');
		this.recipeSelected=new EventEmitter<Recipe>()
	}
	private recipes:Recipe[]=[
		new Recipe(
			'Burger',
			'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled.',
			'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
			[
				new Ingredient('Meat',1),
				new Ingredient('Buns', 1)
			]),
		new Recipe('Paneer Pakora',
			'Pakora is everyone\'s favourite..Specially this one is yummy, it taste great and it so easy to make.',
			'https://upload.wikimedia.org/wikipedia/commons/6/62/Paneer_Pakora.jpg',
			[
				new Ingredient('Paneer',1),
				new Ingredient('Gram Flour', 1)
			])
		
	];

	getRecipes():Recipe[]{
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredient:Ingredient[]){
		this.slService.addIngredientsToList(ingredient);
	}
}