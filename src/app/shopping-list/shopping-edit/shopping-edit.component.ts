import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopListServ: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form:NgForm) {
    const value=form.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);
    this.shopListServ.addIngredient(ingredient);
    form.reset();
  }
}
