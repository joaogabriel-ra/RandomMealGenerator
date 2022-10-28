import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import "./Meal.scss";

const Meal = () => {
  const [meal, setMeal] = useState();
  const [ingredients, setIngredients] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  const handleGetMeal = async () => {
    await fetch(url)
      .then((result) => result.json())
      .then((json) => {
        setMeal(json.meals[0]);
        handleIngredients(json.meals[0]);
      });
  };

  const handleIngredients = (meal) => {
    let ingredients = [];

    Object.getOwnPropertyNames(meal).forEach((property) => {
      if (property.includes("strIngredient") && meal[property] !== "") {
        ingredients.push(meal[property]);
      }
    });

    setIngredients(ingredients);
  };

  return (
    <div className="meal">
      <h3>Get a random meal by clicking below</h3>
      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: 25, margin: 15 }}
        onClick={handleGetMeal}
        role="get-meal"
      >
        Get Meal{" "}
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </Button>
      {meal && (
        <article key={meal.idMeal}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Grid data-testid="meal-img" item xs={12}>
                <img src={meal.strMealThumb} href="" alt=""></img>
              </Grid>
              <Grid data-testid="meal-category" item xs={12}>
                <p>
                  <strong>Category: </strong>
                  {meal.strCategory}
                </p>
              </Grid>
              <Grid data-testid="meal-area" item xs={12}>
                <p>
                  <strong>Area: </strong>
                  {meal.strArea}
                </p>
              </Grid>
              <Grid data-testid="meal-ingredients" item xs={12}>
                <h3>Ingredients:</h3>
                <ul>
                  {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>;
                  })}
                </ul>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid data-testid="meal" item xs={12}>
                <h3>{meal.strMeal}</h3>
              </Grid>
              <Grid data-testid="meal-instructions" item xs={12}>
                <p>{meal.strInstructions}</p>
              </Grid>
            </Grid>
            <Grid data-testid="meal-video" item xs={12}>
              <div className="videoWrapper">
                <iframe
                  title="video"
                  src={meal.strYoutube.replace("watch?v=", "embed/")}
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </article>
      )}
    </div>
  );
};

export default Meal;
