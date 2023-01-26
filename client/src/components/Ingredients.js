import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const recipeId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const getIngredients = async () => {
      await Axios.get("http://localhost:3001/ingredients/" + recipeId)
        .then((response) => {
          setIngredients(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getIngredients();
  }, [recipeId]);

  console.log(ingredients);

  return (
    <>
      <ul className="inglist">
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.ingredient_id} className="ingitem">
              {ingredient.amount === 0
                ? null
                : ingredient.amount > 0 &&
                  parseFloat(ingredient.frac_amount) > 0
                ? ingredient.amount
                : ingredient.amount + " "}
              {parseFloat(ingredient.frac_amount) === 0
                ? ""
                : parseFloat(ingredient.frac_amount) === 0.125
                ? ingredient.frac_amount.replace(
                    /0.125/g,
                    String.fromCharCode(8539)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.25
                ? ingredient.frac_amount.replace(
                    /0.250/g,
                    String.fromCharCode(188)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.333
                ? ingredient.frac_amount.replace(
                    /0.333/g,
                    String.fromCharCode(8531)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.375
                ? ingredient.frac_amount.replace(
                    /0.375/g,
                    String.fromCharCode(8540)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.5
                ? ingredient.frac_amount.replace(
                    /0.500/g,
                    String.fromCharCode(189)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.625
                ? ingredient.frac_amount.replace(
                    /0.625/g,
                    String.fromCharCode(8541)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.667
                ? ingredient.frac_amount.replace(
                    /0.667/g,
                    String.fromCharCode(8532)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.75
                ? ingredient.frac_amount.replace(
                    /0.750/g,
                    String.fromCharCode(190)
                  ) + " "
                : parseFloat(ingredient.frac_amount) === 0.875
                ? ingredient.frac_amount.replace(
                    /0.875/g,
                    String.fromCharCode(8542)
                  ) + " "
                : ingredient.frac_amount}
              {ingredient.amount + parseFloat(ingredient.frac_amount) > 1
                ? ingredient.unit_label + ingredient.unit_plural + " "
                : ingredient.unit_label + " "}
              {ingredient.modification
                ? ingredient.modification + " "
                : ingredient.modification + ""}
              {ingredient.amount + parseFloat(ingredient.frac_amount) > 1 &&
              (ingredient.unit_id === 23 ||
                ingredient.unit_id === 26 ||
                ingredient.unit_id === 27 ||
                ingredient.unit_id === 28 ||
                ingredient.unit_id === 5 ||
                ingredient.unit_id === 4 ||
                ingredient.unit_id === 2 ||
                ingredient.unit_id === 116 ||
                ingredient.unit_id === 131 ||
                (ingredient.amount + parseFloat(ingredient.frac_amount) === 1 &&
                  (ingredient.unit_id === 4 ||
                    ingredient.unit_id === 5 ||
                    ingredient.unit_id === 113)))
                ? ingredient.label + ingredient.plural
                : ingredient.label + ingredient.singular}
              {ingredient.instructions}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Ingredients;
