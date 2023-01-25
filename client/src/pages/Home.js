import React, { useState, useEffect } from "react";
import Axios from "axios";
import Random from "../components/Random";
import Popular from "../components/Popular";

const Home = () => {
  const [totalRecipes, setTotalRecipes] = useState();
  const [recentRecipes, setRecentRecipes] = useState();

  const getTotalRecipes = async () => {
    await Axios.get("http://localhost:3001/count")
      .then((response) => {
        setTotalRecipes(response.data.recipeCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTotalRecipes();
  }, []);

  const getRecentRecipes = async () => {
    await Axios.get("http://localhost:3001/recent")
      .then((response) => {
        setRecentRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRecentRecipes();
  }, []);

  const recentResults = () => {
    if (!recentRecipes || recentRecipes.length === 0) {
      return (
      <div>
        <br />
        <p>There are no new recipes.</p>
        <br />
      </div>
      )
    } else {
      return (
        <div>
          {recentRecipes.map((recipe) => {
            return (
              <div key={recipe.id} className="recipeBlockCell">
                <a className="result" href={recipe.id}>
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
    }
  };

  return (
    <>
      <div className="content">
        <div>
          <p className="centered">
            <b>
              Here at We Love Eats, we love cooking and eating good food, so
              here are some of our favorite recipes. All recipes have full
              nutrition information and Weight Watchers Smart Points (Blue plan)
              included. Enjoy.
            </b>
          </p>
          <br />
          <p className="recCount">Current recipe count: {totalRecipes}</p>
        </div>
        <br style={{ clear: "both" }} />
        <div className="recipeBlock">
          <h2 className="recipeBlockTitle">Added in the Last 90 Days</h2>
          {recentResults()}
        </div>
      </div>
      <Random />
      <Popular />
    </>
  );
};

export default Home;
