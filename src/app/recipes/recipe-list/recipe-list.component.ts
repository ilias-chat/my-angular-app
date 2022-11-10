import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onRecipeClicked2 = new EventEmitter<number>();
  @Input() recipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {}

  onRecipeItemClicked(index:number){
    this.onRecipeClicked2.emit(index);
  }

}
