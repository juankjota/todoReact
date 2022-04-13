import react from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const handleClick = (e)=> alert('hola perola');
    return(
        <button className="CreateTodoButton"
            onClick={handleClick}
        >
        +
        </button>
    )
}

export {CreateTodoButton};