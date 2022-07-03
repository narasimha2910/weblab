import React from "react";
import GamePanel from "../components/gamePanel";
import PlayersPanel from "../components/playersPanel";

const Game = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-20 lg:py-36 w-screen h-screen items-center">
      <PlayersPanel />
      <GamePanel />
    </div>
  );
};

export default Game;

// Players Panel
// Results Panel
// Submit Answer
// Pick Answer
// Timer
