import React, { useState, useEffect } from "react";
import Axios from "axios";

const Directions = () => {
  const [directions, setDirections] = useState([]);
  const recipeId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const getDirections = async () => {
      await Axios.get("http://localhost:3001/directions/" + recipeId)
        .then((response) => {
          setDirections(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getDirections();
  }, [recipeId]);

  console.log(directions);

  return (
    <>
      {directions.map((direction) => {
        return (
          <p key={direction.recipe_direction_id}>
            {direction.direction
              .replace(/ degrees F/g, String.fromCharCode(176) + " F")
              .replace(/1\/8/g, String.fromCharCode(8539))
              .replace(/1\/4/g, String.fromCharCode(188))
              .replace(/1\/3/g, String.fromCharCode(8531))
              .replace(/3\/8/g, String.fromCharCode(8540))
              .replace(/1\/2/g, String.fromCharCode(189))
              .replace(/5\/8/g, String.fromCharCode(8541))
              .replace(/2\/3/g, String.fromCharCode(8532))
              .replace(/3\/4/g, String.fromCharCode(190))
              .replace(/7\/8/g, String.fromCharCode(8542))}
          </p>
        );
      })}
    </>
  );
};

export default Directions;
