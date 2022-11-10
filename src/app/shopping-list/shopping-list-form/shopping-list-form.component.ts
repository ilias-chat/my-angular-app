import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.css']
})
export class ShoppingListFormComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {}

  onAddIngredient(name:string, amount:string){
    this.ingredientAdded.emit(new Ingredient(name, Number(amount)));
  }

}
