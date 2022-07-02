import React from "react";

const Home = () => {
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
        />
        <div className="h-1/2">
          <button className="bg-[#FFDCAE] p-5 text-xl rounded-full  hover:border-[#376c53] hover:border-2">
            Join Server{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
