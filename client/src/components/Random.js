import React, { useState, useEffect } from "react";
import Axios from "axios";

const Random = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  const getRandomRecipes = () => {
    Axios.get("http://localhost:3001/random")
      .then((response) => {
        setRandomRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div className="recipeBlock">
      <h2 className="recipeBlockTitle">Random Recipes</h2>
      {randomRecipes.map((recipe) => {
        return (
          <div key={recipe.id} className="recipeBlockCell">
            <a className="result" href={"/Recipe/" + recipe.id}>
              <img
                className="cat-pic"
                src={"/images/" + recipe.recipepic}
                alt=""
              />
              <br />
              <div className="titleText">{recipe.title}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Random;
