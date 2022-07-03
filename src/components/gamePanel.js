import React from "react";
import AnswerPanel from "./answerPanel";
import QuestionPanel from "./questionPanel";

const GamePanel = () => {
  return (
    <div className="w-full lg:w-1/3 h-full -mt-2 lg:relative lg:left-96">
      <div className="flex justify-between items-center text-lg font-bold px-2 pt-1">
        <div className="flex flex-col items-center">
          <p>Round</p>
          <p>1/3</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Time Left</p>
          <p>100s</p>
        </div>
      </div>
      <QuestionPanel />
      {/* <AnswerPanel /> */}
    </div>
  );
};

export default GamePanel;
