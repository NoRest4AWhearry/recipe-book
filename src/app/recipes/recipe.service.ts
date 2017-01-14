import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http} from "@angular/http";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Very tasty',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cookdiary.net/wp-content/uploads/images/Summer-Salad_17782.jpg', []),
    new Recipe('Hákarl', 'Terrible', 'http://andrewzimmern.com/wp-content/uploads/2015/10/Hakarl-Iceland.jpg', [])
  ];

  constructor(private  http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const recipesURL = 'https://recipebook-69610.firebaseio.com/recipes.json';
    return this.http.post(recipesURL, body, {headers: headers});
  }

  fetchData() {

  }
}
