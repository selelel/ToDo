import './App.css';
import React from 'react';
import { render } from 'react-dom';

const time = new Date()
let day = time.getDay();

if (day == 1){
  var certain = "Monday";
}
else if  (day == 2){
  var certain = "Tuesday";
}
else if (day == 3){
  var certain = "Wenesday";
}
else if (day == 4){
  var certain = "Thursday";
}
else if (day == 5){
  var certain = "Friday";
}
else if (day == 6){
  var certain = "Saturday";
}
else{
  var certain = "Sunday";
}

function Input(){
  return(
    <form>
      <input placeholder='Set List' className="w-60 h-10 mt-5 rounded-xl bg-blue-100 indent-3"  />
      <button className='border-2 border-palette-200 h-10 w-10 rounded-xl ml-4' type='submit'>Add</button>
    </form>
  )
}

function Todo(){
  return( 
    <div className='w-96 h-96 mx-auto rounded-3xl bg-orange-50 translate-y-20 border-2 border-blue-400'>
      <h1 className=' text-3xl ml-4 mt-5'>{certain}</h1>
      <p className='text-base ml-4 mt-1'>To-Do list</p>
      <div className=' border-b-2 border-red-300 mt-3 mx-4'></div>

      <div className="flex justify-evenly">
      <Input />
      </div>

    </div>
  )
}

function Hero(){
  return(
    <div className='box-border'>
      <div className='bg-palette-100 w-full h-12 absolute flex justify-between mb-5'>
        <h1 className='py-3 ml-5 text-lg font-bold'>_sel</h1>
        <h1 className='py-3 ml-5 text-2xl pl-2'>To-Do list</h1>
        <h1 className='py-3 ml-5 text-base pr-2'>GitHub</h1>
      </div>

      <div>
      <Todo/>
      
      </div>

    </div>
  );
}


export default Hero;
