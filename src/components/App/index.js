
// import './App.css';
import react,{useState,useEffect} from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../../TodoContext/index'



// const defaultTodos = [
//   {text:'Estudiar React',completed:false},
//   {text:'Estudiar base de datos',completed:true},
//   {text:'Crear la pagina web',completed:false}
// ]


// function useLocalStorage(itemName,initialValue){  

//   const localStorageItem = localStorage.getItem(itemName);

//   let parsedItem;

//   if(!localStorageItem){
//     localStorage.setItem(itemName,JSON.stringify(initialValue));
//     parsedItem = initialValue;
//   }else{
//     parsedItem = JSON.parse(localStorageItem);
//   }

//   const [item,setItem] = useState(parsedItem);

//   const saveItem = (newItem)=>{
//     const stringifiedItem = JSON.stringify(newItem);
//     localStorage.setItem(itemName,stringifiedItem);
//     setItem(newItem);
//   }

//   return [
//     item,
//     saveItem,
//   ];

// }





function App() {


  

  // console.log('Render antes del use effect');

  // useEffect(()=>{
  //   console.log('use effect');
  // },[])

  // console.log('Render despues del use effect');  

  return (
   <TodoProvider>
     <AppUI />
   </TodoProvider>
  );
}

export default App;
