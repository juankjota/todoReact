import react from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css';



function TodoCounter(){
    const {totalTodos,completedTodos} = react.useContext(TodoContext)


    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter} ;