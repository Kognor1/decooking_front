import React, { Component } from "react";

export default class Recipe extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            recipe: props.recipe,
        }
    }

      render(){
        const {recipe} = this.state;
        console.log(recipe);
        return(
            <>
            <div className='recipe' id={recipe.id} onClick={this.clickOnRecipe}>
                <img src={recipe.photo} alt="avatar" className='recipe__photo' />
                <div className='recipe__name'>{recipe.name}</div>
            </div>
            </>
        )
    }
}
