import React from "react";
import Player from "./player";

const PlayersPanel = () => {
  return (
    <div className="h-56 fixed bottom-0 lg:h-[89.5vh] w-full lg:top-9 lg:relative bg-[#ADCF9F] lg:w-1/4 shadow-xl flex flex-col justify-start items-center px-5 pt-2">
      <div className="text-2xl font-bold mb-4">Players (5/5)</div>
      <div className="w-full flex items-center flex-col overflow-scroll scroll-m-0 scrollbar-thin scrollbar-thumb-green-900  scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <Player alienColor={"red"} />
        <Player alienColor={"blue"} />
        <Player alienColor={"blue"} />
        <Player alienColor={"blue"} />
        <Player alienColor={"blue"} />
      </div>
    </div>
  );
};

export default PlayersPanel;
