import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './ToDo.css';

const ToDo = ({texto = "default", fechayhora = "default", id = "default", fechayhoraT = "default", tarea = "", setTarea}) => {
  const EliminarToDo = () => {
    if (window.confirm("¿Seguro deseas eliminar este ToDo?")){
        const nuevoToDo = tarea.filter(ToDo => { return !(ToDo.id === id);});
    
      setTarea(nuevoToDo);
    }
    }
  const [tachado, setTachado] = useState(false);
  
  
  let ToDoActual = tarea.find(n => n.id === id)
if(tachado){
ToDoActual.fechayhoraT = new Date().toLocaleString()
}
else{
ToDoActual.fechayhoraT = ""
}
  
return(
  <li>
    <div className={tachado ? "Si": "No"}> 
    <Input tipo="checkbox" label="" setTachado={setTachado} tachado={tachado}/>
    <p>texto: {texto} fechayhora: {fechayhora} fechayhoraT: {ToDoActual.fechayhoraT} </p>
  </div>
    <Button type = "null" EliminarToDo={EliminarToDo} text = "Eliminar ToDo ×" clase = "button-elimnar u-full-width"/> 
  </li>
)
}


export default ToDo;