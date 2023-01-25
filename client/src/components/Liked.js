import React, { useState, useEffect } from "react";
import Axios from "axios";

const Liked = () => {
  const [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    const getLiked = async () => {
      await Axios.get("http://localhost:3001/liked")
        .then((response) => {
          setLikedRecipes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getLiked();
  }, []);

  return (
    <div className="recipeBlock">
      <h2 className="recipeBlockTitle">Most Liked Recipes</h2>
      {likedRecipes.map(({recipe}) => {
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

export default Liked;
