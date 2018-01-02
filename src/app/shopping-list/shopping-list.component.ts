import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
	ingredients: Ingredient[];
  constructor(private shopListServ:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shopListServ.getIngredientList();
    this.subscription=this.shopListServ.ingredientsChanged
      .subscribe(
          (ingredients:Ingredient[])=>{
            this.ingredients=ingredients;
          }
        );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnEditIngredient(index:number){
    this.shopListServ.editIngredient.next(index);
  }
}
