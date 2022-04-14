import react from "react";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoContext} from '../../TodoContext';
import { Modal} from '../Modal/index';
import { TodoForm } from '../TodoForm/index';

function AppUI(){
    const {error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal} = react.useContext(TodoContext);

    return(
        <>
      <TodoCounter />   
      
      
      <TodoSearch  />
        
     
     
          <TodoList> 
          {error && <p>Hubo un error...</p>}
          {loading && <p>Estamos cargando...</p>}
          {(!loading && !searchedTodos.length)&&<p>Crea tu primer Todo</p>}

        {searchedTodos.map(todo=>(
          <TodoItem
           key={todo.text} 
           text={todo.text}
           completed={todo.completed}
           onComplete={()=>completeTodo(todo.text)}
           onDelete={()=>deleteTodo(todo.text)}  
           />
        ))}
      </TodoList>
        
     {!!openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
     )}
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
    </>
    )
}

export {AppUI};