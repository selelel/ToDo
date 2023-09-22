import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className='flex justify-evenly items-baseline pt-3'>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className='border-2 border-palette-300 h-9 w-5/6 rounded-lg focus:outline-blue-400 indent-2' placeholder='Update task' />
    <button type="submit" className='border-2 text-white border-palette-300 h-8 px-1 text-[0.8em] ml-1 mr-1 bg-palette-300 ring-offset-1 ring-2 ring-palette-300 rounded-lg transition duration-200 hover:ring-blue-500 hover:bg-blue-500'>Update</button>
    
  </form>
  )
}