import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Terminar curso intro a React.js', completed: true},
  {text: 'Salir a correr', completed: false},
  {text: 'Limpiar el escritorio', completed: true},
  {text: 'Hacerme rico', completed: false},
  {text: 'Hacer 10 flexiones', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
          ))}
        {[]}
      </TodoList>
      
      <CreateTodoButton/>
    </React.Fragment>
  );
}




export default App;
