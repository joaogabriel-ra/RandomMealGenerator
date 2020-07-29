import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css"
import Grid from '@material-ui/core/Grid';

function Meal() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (url.trim() !== "") {
                const result = await axios(url);
                setData(result.data.meals);
                setUrl('');
            }
        };

        fetchData();

    }, [url]);

    return (
        <div className="meal">
            <h3>Get a random meal by clicking below</h3>
            <a type="button" href="/#" onClick={() => setUrl('https://www.themealdb.com/api/json/v1/1/random.php')}>Get Meal <span role="img" aria-label="pizza">🍕</span></a>
            {data.map(meal => (
                <article key={meal.idMeal}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Grid item xs={12}>
                                <img src={meal.strMealThumb} href="" alt=""></img>
                            </Grid>
                            <Grid item xs={12}>
                                <p><strong>Category: </strong>{meal.strCategory}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p><strong>Area: </strong>{meal.strArea}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <h3>Ingredients:</h3>
                                <ul>
                                    {meal.strIngredient1 ? <li>{meal.strIngredient1}</li> : ""}
                                    {meal.strIngredient2 ? <li>{meal.strIngredient2}</li> : ""}
                                    {meal.strIngredient3 ? <li>{meal.strIngredient3}</li> : ""}
                                    {meal.strIngredient4 ? <li>{meal.strIngredient4}</li> : ""}
                                    {meal.strIngredient5 ? <li>{meal.strIngredient5}</li> : ""}
                                    {meal.strIngredient6 ? <li>{meal.strIngredient6}</li> : ""}
                                    {meal.strIngredient7 ? <li>{meal.strIngredient7}</li> : ""}
                                    {meal.strIngredient8 ? <li>{meal.strIngredient8}</li> : ""}
                                    {meal.strIngredient9 ? <li>{meal.strIngredient9}</li> : ""}
                                    {meal.strIngredient10 ? <li>{meal.strIngredient10}</li> : ""}
                                    {meal.strIngredient11 ? <li>{meal.strIngredient11}</li> : ""}
                                    {meal.strIngredient12 ? <li>{meal.strIngredient12}</li> : ""}
                                    {meal.strIngredient13 ? <li>{meal.strIngredient13}</li> : ""}
                                    {meal.strIngredient14 ? <li>{meal.strIngredient14}</li> : ""}
                                    {meal.strIngredient15 ? <li>{meal.strIngredient15}</li> : ""}
                                    {meal.strIngredient16 ? <li>{meal.strIngredient16}</li> : ""}
                                    {meal.strIngredient17 ? <li>{meal.strIngredient17}</li> : ""}
                                    {meal.strIngredient18 ? <li>{meal.strIngredient18}</li> : ""}
                                    {meal.strIngredient19 ? <li>{meal.strIngredient19}</li> : ""}
                                    {meal.strIngredient20 ? <li>{meal.strIngredient20}</li> : ""}
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid item xs={12}>
                                <h3>{meal.strMeal}</h3>
                            </Grid>
                            <Grid item xs={12}>
                                <p>{meal.strInstructions}</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="videoWrapper">
                                <iframe title="video" src={meal.strYoutube.replace("watch?v=", "embed/")}>
                                </iframe>
                            </div>
                        </Grid>
                    </Grid>
                </article>
            ))}
        </div>
    );
}

export default Meal