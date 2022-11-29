import { createInjectableDefinitionMap } from "@angular/compiler/src/render3/partial/injectable";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoopingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    new Recipe(
        'recipe 1', 
        'this is an amazing recipe', 
        'https://www.simplyrecipes.com/thmb/z7w13L_MuI6YgzMbXWouGsjOAGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-1-be30b6674d3b43288bebc87e5eca1bec.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('french fries', 20),
        ]),
    new Recipe(
        'recipe 2', 
        'this is an amazing recipe', 
        'https://www.simplyrecipes.com/thmb/z7w13L_MuI6YgzMbXWouGsjOAGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-1-be30b6674d3b43288bebc87e5eca1bec.jpg',
        [
            new Ingredient('buns', 2),
            new Ingredient('meat', 1),
        ]),
];

constructor(private shoppinglistService:ShoppingListService){}

getRecipes(){
    return this.recipes.slice();
}

addIngredientsToShoppinglist(ingredients:Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
}
}