import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Chicken Biriyani','Indian/Arabic food made using rice & chicken','https://images.t-online.de/2021/06/90189092v2/0x92:1773x997/fit-in/768x0/biryani-das-reisgericht-ist-eines-der-bekanntesten-indischen-gerichte.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
