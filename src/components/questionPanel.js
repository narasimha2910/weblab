import React from "react";

const QuestionPanel = () => {
  return (
    <div className="w-full h-[50%] lg:h-[75%] mt-5 flex p-2">
      <div className="w-full rounded-md p-2 flex flex-col items-center border-[1px]">
        <p className="font-bold h-28 overflow-y-scroll">
          An adjective to describe dizziness
        </p>
        <textarea cols="32" rows="5" className="mb-5 border-[1px] p-1"></textarea>
        <button
          type="submit"
          className="p-2 rounded-lg border-[1px] bg-logoTheme hover:bg-bgTheme"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionPanel;
