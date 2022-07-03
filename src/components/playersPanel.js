import React from "react";
import Player from "./player";

const PlayersPanel = () => {
  return (
    <div className="h-56 fixed bottom-0 lg:h-[95%] w-full lg:-top-3 lg:left-48 lg:relative bg-logoTheme lg:w-1/4 shadow-xl flex flex-col justify-start items-center px-5 pt-2">
      <div className="text-2xl font-bold mb-4 lg:mb-8">Players (5/5)</div>
      <div className="w-full flex items-center flex-col overflow-scroll scrollbar-thin scrollbar-thumb-green-900  scrollbar-thumb-rounded-full scrollbar-track-rounded-full lg:scrollbar-none">
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
