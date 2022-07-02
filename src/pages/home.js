import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [gameId, setGameId] = useState("");

  return (
    <div className="flex py-36 flex-col justify-around w-screen h-screen items-center  text-[#376c53] ">
      <div className="mt-10 h-1/3">
        <button className="bg-[#FFDCAE] p-5 text-xl rounded-full hover:border-[#376c53] hover:border-2">
          Create Server
        </button>
      </div>
      <div className="text-3xl font-medium h-1/3">OR</div>
      <div className="flex flex-col justify-end items-center h-1/4">
        <input
          type="text"
          placeholder="Enter Phrase"
          className="mb-5 rounded-md p-2 focus:outline-[#376c53] caret-transparent bg-[#FFDCAE] text-center"
          onChange={(e) => {
            setGameId(e.target.value);
          }}
        />
        <div className="h-1/2">
          <button
            className="bg-[#FFDCAE] p-5 text-xl rounded-full  hover:border-[#376c53] hover:border-2"
            onClick={() => {
              navigate(`/game/${gameId}`);
            }}
          >
            Join Server{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
