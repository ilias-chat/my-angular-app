import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    ingredientAdded = new EventEmitter<Ingredient>();
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients:Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('bread', 44),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients);
    }
}