import React, { Component } from "react";
import Recipe from '../recipe/recipe';

export default class RecipeList extends Component {
//list-group list-group-horizontal justify-content-space-between
      
      render() {
        const recipes = this.props.recipes;
        return (
            <div className="list  ">
              {recipes.map((item) =>          
                <Recipe recipe={item} />
              )}
            </div>
        );
      }
}