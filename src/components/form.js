import { useState } from 'react'
import React from 'react'


//make the placeholder saggest some task(cook, bath, eat, walk dog, clean dishes);
const Form = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-evenly items-baseline pt-3'>
        <input value={value} onChange={(e)=> setValue(e.target.value) } className='border-2 border-palette-300 h-9 w-5/6 rounded-lg focus:outline-blue-400 indent-2' type='text' placeholder='Enter a Task'/>
        <button className='border-2 text-white border-palette-300 h-8 px-1 bg-palette-300 ring-offset-1 ring-2 ring-palette-300 rounded-lg transition duration-200 hover:ring-blue-500 hover:bg-blue-500'type='submit'>Add</button>
    </form>
  )
}

export default Form