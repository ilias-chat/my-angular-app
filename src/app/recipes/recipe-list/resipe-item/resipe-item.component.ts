import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-resipe-item',
  templateUrl: './resipe-item.component.html',
  styleUrls: ['./resipe-item.component.css']
})
export class ResipeItemComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe('', '', '', []);

  constructor(private recipeService:RecipeService) {}

  ngOnInit(): void {}

  onRecipeClick(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
