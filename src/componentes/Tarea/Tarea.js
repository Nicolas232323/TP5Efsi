import React from "react";
import  './Tarea.css';
import Button from "../Button/Button";

const Tarea = ({setTarea , tarea , id }) => {
    const eliminar = () => {
        if (window.confirm("Estas seguro que quieres eliminar esta cita?")){
            setTarea(tarea.filter(c => c.id !== id))
        }
}
return(
    <>
    <div className = "cita">
    <p>Tarea: <span>{tarea}</span> </p>
    <Button type="null" text="Eliminar" clase="button-elimnar u-full-width" EliminarToDo={eliminar}></Button>
    </div>
    </>
)
}