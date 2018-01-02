import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription }  from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editIngredientIndex:number;
  editMode:boolean=false;
  editItem:Ingredient;
  @ViewChild('shoppingForm') shopForm:NgForm;
  private subscription:Subscription;
  constructor(private shopListServ: ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shopListServ.editIngredient
    .subscribe((num:number)=>{
      this.editIngredientIndex=num;
      this.editMode=true;
      this.editItem=this.shopListServ.getIngredient(num);
      this.shopForm.setValue({
        'name':this.editItem.name,
        'amount':this.editItem.amount
      });
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnSubmit(form:NgForm) {
    const value=form.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shopListServ.updateIngredient(this.editIngredientIndex,ingredient);
      this.editMode=false;
    }else{
      this.shopListServ.addIngredient(ingredient);
    }
    form.reset();
  }

  OnClear(){
    this.shopForm.reset();
    this.editMode=false;
  }

  OnDelete(){
    if(this.editMode){
      this.shopListServ.deleteIngredient(this.editIngredientIndex);
    }
    this.OnClear();
  }

}
