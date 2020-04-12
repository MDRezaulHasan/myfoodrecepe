import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            My Food Recipe
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
            </ul>
            <Form getRecipe={this.getRecipe} />
          </div>
        </nav>
        <Recipes recipeHits={this.state.recipeHits} />
      </div>
    );
  }
}

export default App;
