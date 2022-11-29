import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoopingList.service';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.css']
})
export class ShoppingListFormComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {}

  onAddIngredient(name:string, amount:string){
    this.shoppingListService.ingredientAdded.emit(new Ingredient(name, Number(amount)));
  }

}
