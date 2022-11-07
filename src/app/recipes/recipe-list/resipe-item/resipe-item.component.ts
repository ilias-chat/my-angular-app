import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-resipe-item',
  templateUrl: './resipe-item.component.html',
  styleUrls: ['./resipe-item.component.css']
})
export class ResipeItemComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe('', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
