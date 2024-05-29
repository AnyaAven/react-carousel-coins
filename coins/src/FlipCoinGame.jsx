import React, { useState } from "react";
import Coin from "./Coin.jsx";
import "./FlipCoinGame.css";
import { flipCoin } from "./flipCoin.js";

/**
 * FlipCoinGame Component that holds game state for flipping coincs
 *
 * State:
 * flips: {heads, tails}
 * coinState: default(null) => "heads", "tails"
 *
 * FlipCoinGame -> Coin
 */
function FlipCoinGame() {
  const [flips, setFlips] = useState({ heads: 0, tails: 0 });
  const [coinState, setCoinState] = useState(null);

  function handleFlipClick(evt) {
    const flipResult = flipCoin() === 0 ? "tails" : "heads";
    const nextFlips = { ...flips };
    nextFlips[flipResult] += 1;
    setCoinState(flipResult);
    setFlips(nextFlips);
  }

  return (
    <div className="FlipCoinGame">
      {coinState && <Coin sideShowing={coinState} />}
      <button
        className="FlipCoin-flip-button btn btn-primary"
        onClick={handleFlipClick}>
        Flip Me!
      </button>

      <p className="FlipCoinGame-Data">
        {`Total flips:${flips.heads + flips.tails}
        Heads: ${flips.heads}
        Tails: ${flips.tails}`}
      </p>
    </div>
  );
}

export default FlipCoinGame;
