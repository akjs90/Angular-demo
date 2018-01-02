<<<<<<< HEAD
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription }  from 'rxjs/Subscription';

=======
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
>>>>>>> e6ff56ed879a5793241eb61f0f8f0e05d55fbc54
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

<<<<<<< HEAD
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
=======
  constructor(private shopListServ: ShoppingListService) { }
>>>>>>> e6ff56ed879a5793241eb61f0f8f0e05d55fbc54

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

<<<<<<< HEAD
  OnClear(){
    this.shopForm.reset();
    this.editMode=false;
=======
  onAddIngredient(form:NgForm) {
    const value=form.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    this.shopListServ.addIngredient(ingredient);
    form.reset();
>>>>>>> e6ff56ed879a5793241eb61f0f8f0e05d55fbc54
  }

  OnDelete(){
    if(this.editMode){
      this.shopListServ.deleteIngredient(this.editIngredientIndex);
    }
    this.OnClear();
  }

}
