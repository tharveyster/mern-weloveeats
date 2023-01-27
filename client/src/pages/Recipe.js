import React, { useState, useEffect } from "react";
import Axios from "axios";
import Ingredients from "../components/Ingredients";
import Random from "../components/Random";
import Popular from "../components/Popular";
import Liked from "../components/Liked";
import Contact from "../components/Contact";
import Policies from "../components/Policies";
import Directions from "../components/Directions";
import Nutrition from "../components/Nutrition";
import Wwsp from "../components/Wwsp";
import Modal from "react-bootstrap/Modal";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [category, setCategory] = useState([]);
  const [showPic1, setShowPic1] = useState(false);
  const [showPic2, setShowPic2] = useState(false);
  const recipeId = window.location.pathname.split("/")[2];

  const handleClosePic1 = () => setShowPic1(false);
  const handleShowPic1 = () => setShowPic1(true);
  const handleClosePic2 = () => setShowPic2(false);
  const handleShowPic2 = () => setShowPic2(true);

  useEffect(() => {
    const getRecipe = async () => {
      await Axios.get("http://localhost:3001/recipe/" + recipeId)
        .then((response) => {
          setRecipe(response.data);
          setCategory(response.data.category.title);
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
          <Wwsp />
          <div className="social"></div>
          <h1>{recipe.title}</h1>
          <h2>{recipe.origin}</h2>
          <h3 id="numServ">{recipe.servings} Servings</h3>
          <br />
          <Ingredients />
          <br />
          <Directions />
          {recipe.notes ? <br /> : null}
          {recipe.notes ? (
            <p key={recipe.notes} className="flush">
              <b>Note: </b>
              {recipe.notes}
            </p>
          ) : (
            ""
          )}
          <div className="likeSection"></div>
        </article>
        <aside id="recipePictures" className="recPics">
          <div>
            <img
              id="pics"
              src={"/images/" + recipe.recipepic}
              alt={recipe.keywords}
              title={recipe.title}
              onClick={handleShowPic1}
            />
          </div>
          <Modal show={showPic1} onHide={handleClosePic1}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div>
                <img
                  id="pics"
                  src={"/images/" + recipe.recipepic}
                  alt={recipe.keywords}
                  title={recipe.title}
                />
              </div>
            </Modal.Body>
          </Modal>
          <div style={{ display: recipe.is_there_two }}>
            <img
              id="pics-2nd"
              src={"/images/" + recipe.recipe2ndpic}
              alt={recipe.keywords}
              title={recipe.title}
              onClick={handleShowPic2}
            />
          </div>
          <Modal show={showPic2} onHide={handleClosePic2}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <div>
                <img
                  id="pics-2nd"
                  src={"/images/" + recipe.recipe2ndpic}
                  alt={recipe.keywords}
                  title={recipe.title}
                />
              </div>
            </Modal.Body>
          </Modal>
        </aside>
        <aside id="recipeNutrition">
          <Nutrition />
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
