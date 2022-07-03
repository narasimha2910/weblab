import React from "react";

const QuestionPanel = () => {
  return (
    <div className="w-full h-[50%] mt-5 flex p-2">
      <div className="bg-green-100 w-full rounded-md p-2 flex flex-col items-center">
        <p className="font-bold h-28 overflow-y-scroll">
          An adjective to describe dizziness
        </p>
        <textarea cols="32" rows="5" className="mb-5"></textarea>
        <button type="submit" className="bg-green-800 text-white p-2 rounded-lg">Submit</button>
      </div>
    </div>
  );
};

export default QuestionPanel;
