import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients: Ingredient[]=[
		new Ingredient('Apples',5),
		new Ingredient('Tomatoes',3)
	];

	ingredientsChanged=new Subject<Ingredient[]>();
	editIngredient=new Subject<number>();

	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	getIngredientList():Ingredient[]{
		return this.ingredients.slice();
	}

	addIngredientsToList(ingredients:Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	getIngredient(index:number):Ingredient{
		return this.ingredients[index];
	}

	updateIngredient(index:number,newIngredient:Ingredient){
		this.ingredients[index]=newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index:number){
		this.ingredients.splice(index,1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
