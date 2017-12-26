import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;

  constructor(private recipeService:RecipeService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
        (params:Params)=>{
          const id=+params['id'];
          this.recipe=this.recipeService.getRecipeById(id);
        }
      );
  }
  onAddToShoppingList(){
  	this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
