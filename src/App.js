import './App.css';
import React from 'react';
import Form_temp from './components/timeFunction';


function Hero(){
  return(
    <div className=''>
      <div className='bg-palette-100 w-full h-12 '>
        <lu className="list-none flex justify-between mb-5 text-white ">
          <li className='py-2 ml-5 text-lg font-bold transition ease-in duration-200 hover:text-palette-300 cursor-pointer'><a href='https://www.instagram.com/_selelel/'>_sel</a></li>
          <li className='py-2 ml-5 text-2xl pl-2 transition ease-in duration-200 font-semibold hover:text-palette-300 cursor-default'>To-Do list</li>
          <li className='py-3 pb-0 text-base mr-10 rounded-2xl transition ease-in duration-200 hover:text-palette-300 cursor-pointer'><a href='https://github.com/selelel'>GitHub</a></li>
        </lu>
      </div>
      <div>
        <Form_temp />
      </div>

    </div>
  );
}


export default Hero;
