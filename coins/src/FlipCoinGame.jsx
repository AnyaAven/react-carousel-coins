import React, { useState } from "react";
import Coin from "./Coin.jsx";
import Button from "./Button.jsx";
import "./FlipCoinGame.css";
import { flipCoin } from "./flipCoin.js";

/**
 * FlipCoinGame Component that holds game state for flipping coins
 *
 * State:
 * flips: {heads, tails}
 * coinState: default(null) => "heads", "tails"
 *
 * Events:
 * onClick: Flips coin on Button click
 *
 * FlipCoinGame -> Coin -> Button
 */
function FlipCoinGame() {
  const [flips, setFlips] = useState({ heads: 0, tails: 0 });
  const [coinState, setCoinState] = useState(null);

  function handleFlipClick(evt) {
    const flipResult = flipCoin() === 0 ? "tails" : "heads";

    setCoinState(flipResult);
    setFlips(curr => ({...curr, [flipResult]: curr[flipResult] + 1}));
  }

  return (
    <div className="FlipCoinGame">
      <h1>Let's play a flip game!</h1>
      {coinState && <Coin sideShowing={coinState} />}
      <Button onClick={handleFlipClick} label={"Flip me!"} />
      <p className="FlipCoinGame-Data">
        {`Total flips:${flips.heads + flips.tails}
        Heads: ${flips.heads}
        Tails: ${flips.tails}`}
      </p>
    </div>
  );
}

export default FlipCoinGame;
