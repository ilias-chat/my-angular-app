import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ResipeItemComponent } from './recipes/recipe-list/resipe-item/resipe-item.component';
import { headerComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListFormComponent } from './shopping-list/shopping-list-form/shopping-list-form.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ResipeItemComponent,
    ShoppingListComponent,
    ShoppingListFormComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
