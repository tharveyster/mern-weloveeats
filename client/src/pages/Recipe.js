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

  let twitterUrl =
    "https://twitter.com/intent/tweet?text=" +
    recipe.title +
    "&url=https://www.weloveeats.com/recipe?id=" +
    recipeId +
    "&original_referer=https://www.weloveeats.com/recipe?id=" +
    recipeId;
  twitterUrl = twitterUrl.replace(/&/g, "%26");
  twitterUrl = twitterUrl.replace(/ /g, "+");

  let pinterestUrl =
    "http://pinterest.com/pin/create/button/?url=https://www.weloveeats.com/recipe?id=" +
    recipeId +
    "&media=https://www.weloveeats.com/images/" +
    recipe.recipepic +
    "&description=WeLoveEats.com - " +
    category +
    " - " +
    recipe.title;
  pinterestUrl = pinterestUrl.replace(/ /g, "%20");

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
          <div className="social">
            <a
              href={
                "https://www.facebook.com/sharer.php?u=https://www.weloveeats.com/recipe?id=" +
                recipeId
              }
              rel="noreferrer"
              target="_blank"
              title="Share on Facebook"
              data-social-share-network="facebook"
              className="fa fa-facebook share facebook"
            >
              {" "}
            </a>
            <a
              href={twitterUrl}
              rel="noreferrer"
              target="_blank"
              title="Share on Twitter"
              data-social-share-network="twitter"
              className="fa fa-twitter share twitter"
            >
              {" "}
            </a>
            <a
              href={pinterestUrl}
              rel="noreferrer"
              target="_blank"
              title="Share on Pinterest"
              data-social-share-network="pinterest"
              data-pin-custom="true"
              className="fa fa-pinterest share pinterest"
            >
              {" "}
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                window.print();
              }}
              title="Print"
              className="fa fa-print"
            >
              {" "}
            </a>
          </div>
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
          <div className="likeSection">
            <div className="bottomSection">{recipe.clicks} Views</div>
          </div>
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
