import Tarea from '../Tarea/Tarea'
import Button from '../Button/Button';
import { useState } from 'react';
const FormSubmit = (props) =>{
    const agregarTarea = (e)=>{
        e.preventDefault();
        if (window.confirm('¿Estás seguro de que deseas crear esta tarea')) {
            props.setTareas(
                [
                    ...props.tareas,
                    {    
                        nombreTarea: e.target.nombreTarea.value,
                    }
                ]
            )
        }
        
    }
    return(
    <form onSubmit = {agregarTarea} setCitas ={props.setCitas}>
        <Tarea nombre = "NombreTarea"  tipo="text"/>
        <Button text="Agregar Tarea" type="submit" classname="u-full-width button-primary"/>
    </form>
    )
}
export default FormSubmit;