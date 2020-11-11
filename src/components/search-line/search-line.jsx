import React, { Component } from "react";
import Select from 'react-select';
//import List from "../list/list";
import axios from 'axios';

export default class SearchLine extends Component {
state = {
    value: [],
    list: false,
    ingredients: [
        {name: "Морковь", id:1}, 
        {name: "Свекла", id:2}, 
        {name: "Шоколад", id:3}, 
        {name: "Молоко", id:4},
        {name: "Макароны", id:5},
        {name: "Майонез", id:6},
        {name: "Куриное филе", id:7},
        {name: "Говядина", id:8},
        {name: "Кетчуп", id:9}
    ],
    isLoaded: false,
    error: null,
};

componentDidMount () {
    
    axios.get('https://decooking.ru/dev/recipe/ingredient_type')
    .then(json => json.data.map(result => (
    {
    name: result.name,
    id: result.id
    })))
    .then(newData => {console.log(newData); this.setState({ingredients: newData, isLoaded: true})})
    .catch(error => this.setState({error}));
}

handleChange = (value) => {
console.log("value= ", {value});
this.setState({ value: value, list: false });
}

handleSubmit = (event) => {
    event.preventDefault();

    const data = [];
    this.state.value.forEach((item) =>{
        data.push(item.value)
    });
    console.log('data = ', data);
    
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: data,
        url: 'https://decooking.ru/dev/recipe/findByIngredients',
    };

    axios(options).then(res=>{console.log(res)});
}

printList = () => {
    this.setState({list:true})
}

render() {
    const options = [];
    this.state.ingredients.forEach( (item)=>{
        options.push({value:item.id, label:item.name})
    });
    return (     
        <div className="container">
            <div className="search row justify-content-md-center">
                <Select
                    className="col col-lg-10"
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
            {/*this.state.list && (<List data={this.state.value} />)*/}
        </div>

    );
}
}
