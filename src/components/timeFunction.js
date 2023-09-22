import React, { useState } from "react";
import Form from './form';
import Todo from './todo';
import { EditTodoForm } from "./EditTodoForm";

const t = new Date();
let day = t.getDay();
let date = t.getDate();
let spDay;

switch (day){
    case 0:
        spDay = "Sunday";
        break;
    case 1:
        spDay = "Monday";
        break;
    case 2:
        spDay = "Tuesday";
        break;
    case 3:
        spDay = "Wenesday";
        break;
    case 4:
        spDay = "Thursday";
        break;
    case 5:
        spDay = "Friday";
        break;
    case 6:
        spDay = "Saturday";
        break;
}
  // qoute generator

  const Qoute = {
    0 :"From struggles, beauty takes its shape.",
    1: "Diamonds form from life's pressure.",
    2: "Life's grind reveals the diamond within.",
    3: "Forge your dreams in sweat.",
    4: "Through grind, stars are born.",
    5: "The grindstone of time hones greatness.",
    6: "Grit is the poet's ink.",
    7: "Effort paints the masterpiece.",
    8: "Sow persistence, reap brilliance.",
    9:"The grind of passion ignites souls."
  }

  let qoute_gen = Math.floor(Math.random() * 10);
  let qoute_gen_f = Qoute[qoute_gen];

function Form_temp(){
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{
    setTodos([...todos, {id:Math.floor(Math.random() * 1000), task: todo,
    completed: false }])
    console.log(todos);
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  return(
    <div className=' lg:w-4/12 sm:w-full max-h-[29rem] p-8 mt-5 mx-auto rounded-xl   bg-white border-2 border-palette-300 transition ease-in-out duration-200 transform lg:hover:scale-105 lg:hover:translate-y-3 shadow-lg hover:shadow-palette-300/100 hover:border-blue-400'>
      <h1 className='text-2xl text-palette-300 font-semibold transition ease-in duration-300 hover:text-blue-500 cursor-default'>{spDay}, {date}</h1>
      <p className='text-l  font-semibold text-blue-950 italic cursor-default mt-2 lg:text-center sm:text-left'>"{qoute_gen_f}"</p>
      <Form addTodo = {addTodo}/>
      <div className="max-h-[18rem] overflow-auto mt-2 no-scrollbar">
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      </div>

    </div>
  );
}



export default Form_temp; 