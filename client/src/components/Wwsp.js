import React, { useState, useEffect } from "react";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";

const Wwsp = () => {
  const [wwsp, setWwsp] = useState([]);
  const [showWwsp, setShowWwsp] = useState(false);
  const recipeId = window.location.pathname.split("/")[2];

  const handleCloseWwsp = () => setShowWwsp(false);
  const handleShowWwsp = () => setShowWwsp(true);

  useEffect(() => {
    const getWwsp = async () => {
      await Axios.get("http://localhost:3001/wwsp/" + recipeId)
        .then((response) => {
          setWwsp(response.data.wwsp);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getWwsp();
  }, [recipeId]);

  return (
    <>
      <div id="wwspCircle">
        <button
          style={{ float: "right", border: "none" }}
          title="Weight Watchers Smart Point value was determined using the recipe calculator on the Weight Watchers website. Unless stated otherwise in the ingredient list, all items used for calculations were full-fat ingredients (e.g., whole milk, regular sour cream, etc.). Some of the recipes can be lightened up by using light or fat-free ingredients, but this typically increases the sodium, sugar, or both to compensate for the flavor that was removed with the fat. While we whole-heartedly support Weight Watchers members, this site does not cater specifically to them, and many Weight Watchers followers tend to substitute lighter ingredients regardless of what a recipe calls for."
          onClick={handleShowWwsp}
        >
          <div className="wwspInfo">
            <span className="fa2 fa-info-circle"></span>
          </div>
          <div className="wwsp">
            {wwsp}
            <span className="wwsp2">
              SmartPoints
              <br />
              value
            </span>
          </div>
        </button>
        <Modal show={showWwsp} onHide={handleCloseWwsp}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <span>
              Weight Watchers Smart Point value was determined using the recipe
              calculator on the Weight Watchers website. Unless stated otherwise
              in the ingredient list, all items used for calculations were
              full-fat ingredients (e.g., whole milk, regular sour cream, etc.).
              Some of the recipes can be lightened up by using light or fat-free
              ingredients, but this typically increases the sodium, sugar, or
              both to compensate for the flavor that was removed with the fat.
              While we whole-heartedly support Weight Watchers members, this
              site does not cater specifically to them, and many Weight Watchers
              followers tend to substitute lighter ingredients regardless of
              what a recipe calls for.
            </span>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Wwsp;
