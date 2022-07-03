import React from "react";
import { RiAliensFill } from "react-icons/ri";
// Have a key in db and localstorage -> Match them to play
const Player = ({ alienColor }) => {
  return (
    <div className="flex items-center bg-[#fff] w-5/6 lg:w-full justify-around h-10 mb-2 lg:mb-4 rounded-md border-[1px] border-[#000] lg:text-sm">
      <div className={`text-3xl`} style={{ color: alienColor }}>
        <RiAliensFill />
      </div>
      <div className="w-2/5">Narasimhaa</div>
      <div className="w-2/5">Score: 10</div>
    </div>
  );
};

export default Player;
