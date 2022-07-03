import React from 'react'
import Answer from './answer';

const AnswerPanel = () => {
  return (
    <div className="w-full h-[50%] lg:h-[75%] mt-5 flex p-2">
      <div className="w-full rounded-md px-2 py-4 overflow-scroll flex flex-col items-center border-[1px]">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
}

export default AnswerPanel