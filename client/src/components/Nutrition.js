import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";

const Nutrition = () => {
  const [nutrition, setNutrition] = useState([]);
  const [showNutInfo, setShowNutInfo] = useState(false);
  const recipeId = window.location.pathname.split("/")[2];

  const handleCloseNutInfo = () => setShowNutInfo(false);
  const handleShowNutInfo = () => setShowNutInfo(true);

  useEffect(() => {
    const getNutrition = async () => {
      await Axios.get("http://localhost:3001/nutrition/" + recipeId)
        .then((response) => {
          setNutrition(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getNutrition();
  }, [recipeId]);

  return (
    <>
      <div id="nut_info">
        <div className="title">
          <button
            className="nutInfo"
            style={{ border: "none", background: "none" }}
            title="Nutrition Facts are based on the new FDA regulations for 2022, and are estimated as closely as we have the ability to do so. They're not guaranteed to be 100% accurate, and reflect the recipe as it is shown. Unless stated otherwise in the ingredient list, all items used for calculations were full-fat ingredients (e.g., whole milk, regular sour cream, etc.). Some of the recipes can be lightened up by using light or fat-free ingredients, but this typically increases the sodium, sugar, or both to compensate for the flavor that was removed with the fat."
            onClick={handleShowNutInfo}
          >
            Nutrition Facts
            <span className="nutInfo2">
              <span className="fa2 fa-info-circle"></span>
            </span>
          </button>
          <Modal show={showNutInfo} onHide={handleCloseNutInfo}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <span>
                Nutrition Facts are based on the new FDA regulations for 2022,
                and are estimated as closely as we have the ability to do so.
                They're not guaranteed to be 100% accurate, and reflect the
                recipe as it is shown. Unless stated otherwise in the ingredient
                list, all items used for calculations were full-fat ingredients
                (e.g., whole milk, regular sour cream, etc.). Some of the
                recipes can be lightened up by using light or fat-free
                ingredients, but this typically increases the sodium, sugar, or
                both to compensate for the flavor that was removed with the fat.
              </span>
            </Modal.Body>
          </Modal>
        </div>
        <ul>
          <li className="servings">Servings Per Recipe: {nutrition.servings}</li>
          <li className="amount">
            <b>Amount Per Serving</b>
          </li>
          <li>
            <b>Calories:</b> {nutrition.calories}
          </li>
          <li className="indent">
            Calories from fat: {nutrition.fat_calories}
          </li>
        </ul>
        <ul className="nut_table1">
          <li className="amount">&nbsp;</li>
          <li>
            <b>Total Fat:</b> {parseFloat(nutrition.total_fat)} g
          </li>
          <li className="indent">
            Saturated Fat: {parseFloat(nutrition.sat_fat)} g
          </li>
          <li className="indent">
            Monounsaturated Fat: {parseFloat(nutrition.mono_fat)} g
          </li>
          <li className="indent">
            Polyunsaturated Fat: {parseFloat(nutrition.poly_fat)} g
          </li>
          <li>
            <b>Cholesterol:</b> {nutrition.cholesterol} mg
          </li>
          <li>
            <b>Sodium:</b> {nutrition.sodium} mg
          </li>
          <li>
            <b>Total Carbohydrate:</b> {parseFloat(nutrition.carbs)} g
          </li>
          <li className="indent">
            Dietary Fiber: {parseFloat(nutrition.fiber)} g
          </li>
          <li className="indent">Sugars: {parseFloat(nutrition.sugar)} g</li>
          <li>
            <b>Protein:</b> {parseFloat(nutrition.protein)} g
          </li>
        </ul>
        <ul className="nut_table2">
          <li className="value">
            <b>% Daily Value *</b>
          </li>
          <li>{nutrition.total_fat_perc}%</li>
          <li>{nutrition.sat_fat_perc}%</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>{nutrition.cholesterol_perc}%</li>
          <li>{nutrition.sodium_perc}%</li>
          <li>{nutrition.carbs_perc}%</li>
          <li>{nutrition.fiber_perc}%</li>
          <li>&nbsp;</li>
          <li>{nutrition.protein_perc}%</li>
        </ul>
        <br />
        <ul className="nut_table3">
          <li>Vitamin A {nutrition.vitamin_a}mcg</li>
          <li>Vitamin D {nutrition.vitamin_d}mcg</li>
          <li>Vitamin K {nutrition.vitamin_k}mcg</li>
          <li>Riboflavin {nutrition.riboflavin}mcg</li>
          <li>Vitamin B6 {nutrition.vit_b6}mcg</li>
          <li>Vitamin B12 {nutrition.vit_b12}mcg</li>
          <li>Choline {nutrition.choline}mg</li>
          <li>Iron {nutrition.iron}mg</li>
          <li>Magnesium {nutrition.magnesium}mg</li>
          <li>Selenium {nutrition.selenium}mg</li>
          <li>Manganese {nutrition.manganese}mcg</li>
        </ul>
        <ul className="nut_table4">
          <li>{nutrition.vitamin_a_perc}%</li>
          <li>{nutrition.vitamin_d_perc}%</li>
          <li>{nutrition.vitamin_k_perc}%</li>
          <li>{nutrition.riboflavin_perc}%</li>
          <li>{nutrition.vit_b6_perc}%</li>
          <li>{nutrition.vit_b12_perc}%</li>
          <li>{nutrition.choline_perc}%</li>
          <li>{nutrition.iron_perc}%</li>
          <li>{nutrition.magnesium_perc}%</li>
          <li>{nutrition.selenium_perc}%</li>
          <li>{nutrition.manganese_perc}%</li>
        </ul>
        <ul className="nut_table5">
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
          <li>&bull;</li>
        </ul>
        <ul className="nut_table6">
          <li>Vitamin C {nutrition.vitamin_c}mg</li>
          <li>Vitamin E {nutrition.vitamin_e}mg</li>
          <li>Thiamin {nutrition.thiamin}mcg</li>
          <li>Niacin {nutrition.niacin}mg</li>
          <li>Folate {nutrition.folate}mcg</li>
          <li>Pantothenic Acid {nutrition.panto_acid}mcg</li>
          <li>Calcium {nutrition.calcium}mg</li>
          <li>Phosphorus {nutrition.phosphorus}mg</li>
          <li>Zinc {nutrition.zinc}mcg</li>
          <li>Copper {nutrition.copper}mcg</li>
          <li>Potassium {nutrition.potassium}mg</li>
        </ul>
        <ul className="nut_table7">
          <li>{nutrition.vitamin_c_perc}%</li>
          <li>{nutrition.vitamin_e_perc}%</li>
          <li>{nutrition.thiamin_perc}%</li>
          <li>{nutrition.niacin_perc}%</li>
          <li>{nutrition.folate_perc}%</li>
          <li>{nutrition.panto_acid_perc}%</li>
          <li>{nutrition.calcium_perc}%</li>
          <li>{nutrition.phosphorus_perc}%</li>
          <li>{nutrition.zinc_perc}%</li>
          <li>{nutrition.copper_perc}%</li>
          <li>{nutrition.potassium_perc}%</li>
        </ul>
        <br />
        <ul className="pdv">
          <li className="pdv2">
            * Percent Daily Values are based on a 2,000 calorie diet. Your daily
            value might be higher or lower depending on your calorie needs.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nutrition;
