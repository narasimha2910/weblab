import React from "react";
import { RiAliensFill } from "react-icons/ri";
// Have a key in db and localstorage -> Match them to play
const Player = ({ alienColor }) => {
  return (
    <div className="flex items-center justify-around bg-[#FFDCAE] w-5/6 lg:w-full h-10 mb-2 rounded-md border-[1px] border-[#376c53] text-[#376c53]">
      <div className={`text-3xl w-1/5`} style={{ color: alienColor }}>
        <RiAliensFill />
      </div>
      <div className="w-2/5">Narasimhaa</div>
      <div className="w-2/6">Score: 10</div>
    </div>
  );
};

export default Player;
