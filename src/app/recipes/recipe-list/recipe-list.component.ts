import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('recipe 1', 'this is an amazing recipe', 'https://www.simplyrecipes.com/thmb/z7w13L_MuI6YgzMbXWouGsjOAGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-1-be30b6674d3b43288bebc87e5eca1bec.jpg'),
    new Recipe('recipe 2', 'this is an amazing recipe', 'https://www.simplyrecipes.com/thmb/z7w13L_MuI6YgzMbXWouGsjOAGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-1-be30b6674d3b43288bebc87e5eca1bec.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
