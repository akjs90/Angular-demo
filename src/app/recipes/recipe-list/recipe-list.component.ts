import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[]=[
		new Recipe('This is a test recipe','Test description','https://get.pxhere.com/photo/dish-food-salad-vegetable-recipe-meat-beef-steak-kale-garnish-dining-refreshments-tenderloin-venison-piement-beef-tenderloin-horseradish-rib-eye-steak-roast-beef-sirloin-steak-meat-chop-flat-iron-steak-tafelspitz-1376527.jpg'),
		new Recipe('This is a test recipe','Test description','https://get.pxhere.com/photo/dish-food-salad-vegetable-recipe-meat-beef-steak-kale-garnish-dining-refreshments-tenderloin-venison-piement-beef-tenderloin-horseradish-rib-eye-steak-roast-beef-sirloin-steak-meat-chop-flat-iron-steak-tafelspitz-1376527.jpg')
		
	];
  constructor() { }

  ngOnInit() {
  }

}
