import React, { useState, useEffect } from "react";
import Axios from "axios";
import Ingredients from "../components/Ingredients";
import Random from "../components/Random";
import Popular from "../components/Popular";
import Liked from "../components/Liked";
import Contact from "../components/Contact";
import Policies from "../components/Policies";
import Directions from "../components/Directions";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [category, setCategory] = useState([]);
  const recipeId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const getRecipe = async () => {
      await Axios.get("http://localhost:3001/recipe/" + recipeId)
        .then((response) => {
          setRecipe(response.data);
          setCategory(response.data.category.title)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getRecipe();
  }, [recipeId]);

  return (
    <>
      <div className="rec-header">
        <div className="rec-header-title">
          <p className="rec-header-text">{category}</p>
        </div>
      </div>
      <br style={{ clear: "both" }} />
      <div id="content" className="rec-content">
        <article id="recipeMainContent">
          <div id="wwspCircle">
          </div>
          <div className="social">
          </div>
          <h1>{recipe.title}</h1>
          <h2>{recipe.origin}</h2>
          <h3 id="numServ">{recipe.servings} Servings</h3>
          <br />
          <Ingredients />
          <br />
          <Directions />
          <div className="likeSection">
          </div>
        </article>
        <aside id="recipePictures" className="recPics">
        </aside>
        <aside id="recipeNutrition">
        </aside>
      </div>
      <Random />
      <Popular />
      <Liked />
      <Contact />
      <Policies />
    </>
  );
};

export default Recipe;

/*
      <div className="rec-header">
        <div className="rec-header-title">
          <p className="rec-header-text">{recipe.category.title}</p>
        </div>
      </div>
      <br style={{ clear: "both" }} />
      <div id="content" className="rec-content">
        <article id="recipeMainContent">
          <div id="wwspCircle">
          </div>
          <div className="social">
          </div>
          <h1>{recipe.title}</h1>
          <h2>{recipe.origin}</h2>
          <h3 id="numServ">{recipe.servings} Servings</h3>
          <br />
          <ul className="inglist">
          </ul>
          <br />
          <div className="likeSection">
          </div>
        </article>
        <aside id="recipePictures" className="recPics">
        </aside>
        <aside id="recipeNutrition">
        </aside>
      </div>
      <Random />
      <Popular />
      <Liked />
      <Contact />
      <Policies />
 */