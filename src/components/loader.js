import React from 'react'
import { Circles } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <Circles height="100" width="100" color="#b04ff2" ariaLabel="loading" />
    </div>
  );
}

export default Loader