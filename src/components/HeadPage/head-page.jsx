import React, {Component} from 'react';
import SearchLine from '../search-line/search-line';
import RecipeList from '../list/recipe-list';

export default class HeadPage extends Component {
    state = {
        recipes: []
    //         {
    //             id:"eghjng85io4o", 
    //             name: "Жареная картошка", 
    //             photo: "https://adm.odincult.ru/images/__temp/2020-06/17108358675ee0f728ba29e.jpg"
    //         },
    //         {
    //             id:"eghjng85i457", 
    //             name: "Яичница", 
    //             photo: 'https://i.pinimg.com/originals/7b/6b/0e/7b6b0e189d627255b099c96423126d19.jpg'
    //         },
    //         {
    //             id:"eghjng85i458", 
    //             name: "Салат", 
    //             photo: 'https://i.pinimg.com/originals/7b/6b/0e/7b6b0e189d627255b099c96423126d19.jpg'
    //         },
    //         {
    //             id:"eghjng85i479", 
    //             name: "Кофе", 
    //             photo: 'https://i.pinimg.com/originals/7b/6b/0e/7b6b0e189d627255b099c96423126d19.jpg'
    //         },
    //         {
    //             id:"eghjng85i46", 
    //             name: "Сало", 
    //             photo: 'https://i.pinimg.com/originals/7b/6b/0e/7b6b0e189d627255b099c96423126d19.jpg'
    //         },
    //         {
    //             id:"eghjng85i490", 
    //             name: "Бутерброд", 
    //             photo: 'https://i.pinimg.com/originals/7b/6b/0e/7b6b0e189d627255b099c96423126d19.jpg'
    //         }
    // ]
    };
    setRecipes = (recipes) => {
        console.log('setRecipes');

        this.setState({recipes: recipes});
    }
    // Создать стэйт хранящий список рецептов. +
    // Создать функцию которая будет вызываться при нажатии кнопки поиска;
    // она передаётся как пропс в серч-лайн;
    // внутри этой функции будем менять стэйт отвечающий за список рецептов.
    // Этот стэйт будем передавать в список рецептов. +
    render(){
        console.log(this.state.recipes);
        return(
        <>
            <SearchLine setRecipes={this.setRecipes} />
            <RecipeList recipes={this.state.recipes}/>
        </>
        )
    }
}