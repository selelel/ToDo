import React from 'react';
import { Todo } from './todo';
import { EditTodoForm } from './EditTodoForm';



export const Todos = ({task, deleteTodo, editTodo, toggleComplete}) => {
    return(
        <div>
            <div className=' bg-palette-300 h-9 w-full rounded-lg mt-3 flex justify-between text-white cursor-pointer' >
                <span className='my-auto ml-2 text-sm select-none truncate' > <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p></span>
                <div className='my-auto mr-3 flex cursor-pointer justify-between'><p className='mx-1 text-[#00b3de] text-sm hover:underline transition duration-400 ease-in-out hover:text-white'onClick={() => editTodo(task.id)}>update</p><p className='mx-1 text-[#00b3de] text-sm hover:underline transition duration-400 ease-in-out hover:text-red-400' onClick={() => deleteTodo(task.id)}> delete</p></div>
            </div>
        </div>
    )

}
export default Todos;