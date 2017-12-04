import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[]=[
		new Recipe('This is a test recipe','Test description','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg'),
		new Recipe('Another Recipe','Test description','http://www.seriouseats.com/recipes/assets_c/2016/03/20160309-peanut-sweet-potato-kale-coconut-soup-stew-19-thumb-1500xauto-430284.jpg')
		
	];

  @Output() selectedRecipeWas=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe:Recipe){
    this.selectedRecipeWas.emit(recipe);
  }
}
