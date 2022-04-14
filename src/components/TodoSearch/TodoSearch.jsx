import react,{useState} from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css';



function TodoSearch (){
    const {searchValue,setSearchValue} = react.useContext(TodoContext);
    


    const onSearchValueChange = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setSearchValue(e.target.value);
    }


    return(
        <input className="TodoSearch"
         placeholder="estudiar"
         value={searchValue}
         onChange={onSearchValueChange}    
         />
         

        
    )
}

export {TodoSearch};