import React, { useState, useEffect } from "react";
import Axios from "axios";

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getPopularRecipes = () => {
    Axios.get("http://localhost:3001/popular")
      .then((response) => {
        setPopularRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <div className="recipeBlock">
      <h2 className="recipeBlockTitle">Most Viewed Recipes</h2>
      {popularRecipes.map((recipe) => {
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

export default Popular;
