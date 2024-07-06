import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './ToDo.css';

const ToDo = ({texto = "default", horarioTODO = "default", id = "default", horarioTachado = "default", tarea = "", setTarea}) => {
  const EliminarToDo = () => {
    if (window.confirm("¿Seguro deseas eliminar este ToDo?")){
        const nuevoToDo = tarea.filter(ToDo => { return !(ToDo.id === id);})
      setTarea(nuevoToDo);
    }
    }
  const [tachado, setTachado] = useState(false);
  
  
  let ToDoActual = tarea.find(n => n.id === id)
if(tachado){
ToDoActual.horarioTachado = new Date().toLocaleString()
}
else{
ToDoActual.horarioTachado = ""
}
  
return(
  <li>
    <div className={tachado ? "Si": "No"}> 
    <Input label="" tipo="checkbox" nombre="" setTachado={setTachado} tachado={tachado}/>
    <p>ToDo: {texto} Fecha de creación: {horarioTODO} Fecha tachado: {ToDoActual.horarioTachado} </p>
  </div>
    <Button type = "null" EliminarToDo={EliminarToDo} text = "Eliminar ToDo ×" clase = "button-elimnar u-full-width"/> 
  </li>
)
}
export default ToDo;