import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit, OnDestroy {
	recipes:Recipe[];
  private subscription:Subscription;
  constructor(private recipeService: RecipeService, 
  	private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
    this.subscription=this.recipeService.recipeListChanged.subscribe((data:Recipe[])=>{
      this.recipes=data;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onNewRecipe(){
  	this.router.navigate(['new'],{relativeTo:this.activeRoute});
  }
}
