import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.thecocinamonologues.com/wp-content/uploads/2013/03/dsc_01621.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.thecocinamonologues.com/wp-content/uploads/2013/03/dsc_01621.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
