import React, { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [totalRecipes, setTotalRecipes] = useState();

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
      </div>
    </>
  );
};

export default Home;
