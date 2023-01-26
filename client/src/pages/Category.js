import React, { useState, useEffect } from "react";
import Axios from "axios";
import Random from "../components/Random";
import Popular from "../components/Popular";
import Liked from "../components/Liked";
import Contact from "../components/Contact";
import Policies from "../components/Policies";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const categoryId = window.location.pathname.split('/')[2];

  useEffect(() => {
    const getCategoryData = async () => {
      await Axios.get("http://localhost:3001/category/" + categoryId)
      .then((response) => {
        setCategoryData(response.data);
        setCategoryRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      })
    };
    getCategoryData();
  }, [categoryId]);

  return (
    <>
    <div className="cat-header">
      <div className="cat-header-title">
        <h1 className="cat-header-text">{categoryData.title}</h1>
      </div>
    </div>
    <div id="content" className="cat-content">
      {categoryRecipes.map((recipe) => {
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
    <Random />
    <Popular />
    <Liked />
    <Contact />
    <Policies />
    </>
  )
};

export default Category;