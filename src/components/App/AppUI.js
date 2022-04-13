import react from "react";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

function AppUI(props){
    return(
        <>
      <TodoCounter
        total={props.totalTodos}
        completed={props.completedTodos}
      />
      
      <TodoSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      
      <TodoList> 
        {props.searchedTodos.map(todo=>(
          <TodoItem
           key={todo.text} 
           text={todo.text}
           completed={todo.completed}
           onComplete={()=>props.completeTodo(todo.text)}
           onDelete={()=>props.deleteTodo(todo.text)}  
           />
        ))}
      </TodoList>
      <CreateTodoButton/>
      
    </>
    )
}

export {AppUI};