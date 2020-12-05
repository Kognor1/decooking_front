import React, { Component } from "react";

export default class RecipeList extends Component {
  state = {
    indexVisible: 12
  }

  changeVisibleRecipes = () => {
    const recipes = this.props.recipes;
    const arrayRecipes = Array.from(recipes);
    const length = arrayRecipes.length;
    const indexVisible = this.state.indexVisible;
    
    if (length < indexVisible) {
      this.setState({disable: true});
    } else {
      this.setState({indexVisible: indexVisible + 12})
    }
  }

  render() {
    const indexVisible = this.state.indexVisible;
    const recipes = this.props.recipes.slice(0, indexVisible);
    const allLength = this.props.recipes.length;

    let disabled;
    if (recipes.length < allLength){
      disabled = true;
    } else {
      disabled = false;
    }

    return (
      <div className="list">
        <div className="row row-cols-1 row-cols-md-4 justify-content-md-center">
          {recipes.map((item) =>          
            <div className="col mb-4" key={item.id}>
              <div className="card bg-light card-cursor">
                <img src="https://adm.odincult.ru/images/__temp/2020-06/17108358675ee0f728ba29e.jpg" className="card-img-top" alt="avatar" /> 
                <div className="card-body">
                  <h5 className="card-title del-margin-bottom">{item.name}</h5>
                </div>
              </div>
            </div>
          )}        
        </div>
        {disabled &&
          <button type="button" class="btn btn-primary btn-show-more" onClick={this.changeVisibleRecipes}>Показать ещё</button>
        }
        
      </div>
    );
  }
}