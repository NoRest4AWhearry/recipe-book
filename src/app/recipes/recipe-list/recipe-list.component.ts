import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Dummy", "Dummy",
    'http://graphics8.nytimes.com/images/2012/05/20/magazine/20wmt/20wmt-articleLarge.jpg');

  constructor() { }

  ngOnInit() {
  }

}
