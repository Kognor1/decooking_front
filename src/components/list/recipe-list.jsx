import React, { Component } from "react";

export default class RecipeList extends Component {
  render() {
    const recipes = this.props.recipes;

    return (
      <div className="row row-cols-1 row-cols-md-4 list justify-content-md-center">
        {recipes.map((item) =>          
          <div className="col mb-4" key={item.id}>
            <div className="card bg-light card-cursor">
              <img src={item.photo} className="card-img-top" alt="avatar" /> 
              <div className="card-body">
                <h5 className="card-title del-margin-bottom">{item.name}</h5>
              </div>
            </div>
          </div>
        )}        
      </div>
    );
  }
}