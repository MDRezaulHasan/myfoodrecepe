import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "bd2b55d89a8e9fa7393601ee7bbd232d";
const APP_ID = "151a69c3";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    console.log("Title: " + title);
    const request = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    );
    const response = await request.json();

    this.setState({ activeRecipe: response.hits[0].recipe });
    // console.log(this.state.activeRecipe);
  };

  render() {
    const recipe = this.state.activeRecipe;
    console.log(recipe);
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div>
            <div className="active-recipe">
              <button className="active-recipe__button">
                <Link to="/">Back To Home</Link>
              </button>
              <img
                className="active-recipe__img"
                src={recipe.image}
                alt={recipe.label}
              />
              <h3 className="active-recipe__title">{recipe.label}</h3>
              <h4 className="active-recipe__publisher">
                Publisher:<span>{recipe.source}</span>
              </h4>
              <p className="active-recipe__website">
                Website:{" "}
                <span>
                  <a href={recipe.url}>{recipe.url}</a>
                </span>
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <h6>Health Labels: </h6>
                <ul>
                  {recipe.healthLabels.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-8">
                <h6 className="active-recipe__publisher">Nutrients Label:</h6>
                <table className="table">
                  <thead>
                    <th>Label</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{recipe.totalNutrients.FAT.label}</td>
                      <td>{recipe.totalNutrients.FAT.quantity.toFixed(2)}</td>
                      <td>{recipe.totalNutrients.FAT.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.ENERC_KCAL.label}</td>
                      <td>
                        {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                      </td>
                      <td>{recipe.totalNutrients.ENERC_KCAL.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.CHOCDF.label}</td>
                      <td>
                        {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                      </td>
                      <td>{recipe.totalNutrients.CHOCDF.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.FIBTG.label}</td>
                      <td>{recipe.totalNutrients.FIBTG.quantity.toFixed(2)}</td>
                      <td>{recipe.totalNutrients.FIBTG.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.SUGAR.label}</td>
                      <td>{recipe.totalNutrients.SUGAR.quantity.toFixed(2)}</td>
                      <td>{recipe.totalNutrients.SUGAR.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.VITD.label}</td>
                      <td>{recipe.totalNutrients.VITD.quantity.toFixed(2)}</td>
                      <td>{recipe.totalNutrients.VITD.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.TOCPHA.label}</td>
                      <td>
                        {recipe.totalNutrients.TOCPHA.quantity.toFixed(2)}
                      </td>
                      <td>{recipe.totalNutrients.TOCPHA.unit}</td>
                    </tr>
                    <tr>
                      <td>{recipe.totalNutrients.VITK1.label}</td>
                      <td>{recipe.totalNutrients.VITK1.quantity.toFixed(2)}</td>
                      <td>{recipe.totalNutrients.VITK1.unit}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h6 className="active-recipe__publisher">Ingredients:</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.ingredients.map((item) => (
                    <tr>
                      <td>{item.text}</td>
                      <td>{item.weight.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
