import React, { Component } from "react";
import Select from 'react-select';
import axios from 'axios';
export default class SearchLine extends Component {
state = {
    value: [],
    ingredients: [],
    isLoaded: false,
    error: null
};

componentDidMount () {
    
    axios.get('https://www.decooking.ru/dev/recipe/ingredient_type')
        .then(json => json.data.map(result => ({
                name: result.name,
                id: result.id
            })))
        .then(newData => {
            console.log(newData); 
            this.setState({
                ingredients: newData, 
                isLoaded: true})
            })
        .catch(error => this.setState({error}));
}

handleChange = (value) => {
    this.setState({ value: value });
}

handleSubmit = (event) => {
    event.preventDefault();

    const data = [];
    this.state.value.forEach((item) =>{
        data.push(item.value)
    });
    
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: data,
        url: 'https://decooking.ru/dev/recipe/findByIngredients',
    };

    axios(options).then(res=>{console.log("find ", res)});
    //здесь нужно переслать данные в список рецептов
}

render() {
    const options = [];
    this.state.ingredients.forEach( (item)=>{
        options.push({value:item.id, label:item.name})
    });
 
    return (    
        <>
        {this.state.isLoaded && 
        <div className="search-line row justify-content-lg-center">
            <Select
                className="col col-lg-10 delet-left-padding"
                placeholder="Выбор ингредиентов"
                isMulti 
                name="search"
                options={options}
                isClearable
                isSearchable
                onChange={this.handleChange}
                value={this.state.value}
                theme={theme => ({
                    ...theme,
                    colors: {
                    ...theme.colors,
                    primary: 'black',
                    },
                })}
            />
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Найти</button>
        </div>
        }
        </>
    );
}
}
