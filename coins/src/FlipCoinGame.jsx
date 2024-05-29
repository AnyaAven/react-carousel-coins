import React from "react";
import Coin from "./Coin.jsx";
import "./FlipCoinGame.css";

/**
 * FlipCoinGame Component that holds game state for flipping coincs
 *
 * State:
 * flips: {heads, tails}
 *
 * FlipCoinGame -> Coin
 */
function FlipCoinGame() {
  const [coinFlips, setCoinFlip] = useState();

  // {head: 1, tails: 0}
  return (
    <div className="FlipCoinGame">
      <Coin />
      <button class="FlipCoin-button btn btn-primary">Flip Me!</button>
    </div>
  );
}

export default FlipCoinGame;
