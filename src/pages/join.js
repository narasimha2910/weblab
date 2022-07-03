import React, { useEffect, useRef } from "react";
import { RiAliensFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const Join = () => {
  let params = useParams();
  let navigate = useNavigate();
  const randomHexGen = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    alienRef.current.style.color = `#${randomColor}`;
    switchRef.current.style.color = `#${randomColor}`;
  };
  const alienRef = useRef(null);
  const switchRef = useRef(null);
  useEffect(() => {
    randomHexGen();
  }, []);

  return (
    <div className="flex flex-col py-20 w-screen h-screen items-center justify-around">
      <div className="font-bold text-2xl text-[#1f4a36]">Join Game</div>
      <div className={`text-9xl`} ref={alienRef}>
        <RiAliensFill />
      </div>
      <button
        className={`text-2xl cursor-pointer`}
        ref={switchRef}
        onClick={() => {
          randomHexGen();
        }}
      >
        <FaRandom />
      </button>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="mb-5 rounded-md p-2 border-[#000] bg-[#fff] text-center border-2"
        />
      </div>
      <div>
        <button
          className="bg-logoTheme hover:bg-bgTheme py-5 px-16 text-xl rounded-full border-[#000000] border-2 flex items-center"
          onClick={() => {
            navigate(`/game/${params.gameId}`);
          }}
        >
          <p>Start</p>
          <BsArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Join;
