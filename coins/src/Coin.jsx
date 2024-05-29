import React from "react";
import "./Coin.css";
import coinHeadsImg from "./headsPenny.jpg"
import coinTailsImg from "./tailsPenny.jpg"


const COIN_IMAGES = {
  heads: coinHeadsImg,
  tails: coinTailsImg,
};

/**
 *  Coin Image
 *
 * Props:
 * sideShowing: "heads" or "tails" (Default: heads)
 *
 */
function Coin({ sideShowing = "heads" }) {

  return (
    <div className="Coin">
      <img
        className="Coin-img"
        src={COIN_IMAGES[sideShowing]}
        alt={`Coin ${sideShowing}`}>
      </img>
    </div>
  );
}

export default Coin;