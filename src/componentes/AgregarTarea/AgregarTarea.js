import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input"
const ToDo = ({tarea = "", setTarea}) => {
    const addToDo = (e) => {
      e.preventDefault();
      if(window.confirm("Quieres añadir este ToDo?")) {
        setTarea([
          ...tarea ,
          {
          id: Date.now(),
          texto: e.target.todo.value,
          horarioTODO: new Date().toLocaleString(),
          horarioTachado: null
        }
        ]);
      }
    }
  
    return(
      <form className="" onSubmit={addToDo}>
        <Input label="Tarea" tipo="text" nombre="todo" className="u-full-width" placeholder="ToDO" /> 
        <Button text="Agregar Tarea" type="submit" clase="button-primary"> </Button>
      </form>
    )
  }
  
  export default ToDo;