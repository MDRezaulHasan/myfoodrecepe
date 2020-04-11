import React, { Component } from "react";

import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "bd2b55d89a8e9fa7393601ee7bbd232d";
const APP_ID = "151a69c3";

class App extends Component {
  state = {
    recipeHits: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=12&calories=591-722&health=alcohol-free
`);
    const data = await api_call.json();
    this.setState({ recipeHits: data.hits });
    console.log(this.state.recipeHits);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipeHits = JSON.parse(json);
    this.setState({ recipeHits: recipeHits });
  };
  componentDidUpdate = () => {
    const recipeHits = JSON.stringify(this.state.recipeHits);
    localStorage.setItem("recipes", recipeHits);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Food Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipeHits={this.state.recipeHits} />
      </div>
    );
  }
}

export default App;
