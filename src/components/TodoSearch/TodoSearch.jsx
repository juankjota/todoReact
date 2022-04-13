import react,{useState} from "react";
import './TodoSearch.css';



function TodoSearch ({searchValue,setSearchValue}){
    


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