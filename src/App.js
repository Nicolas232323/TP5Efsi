import './App.css';
import Button from './componentes/Button/Button';
import Input from './componentes/Input/Input';
import Titulo from './componentes/Titulo/Titulo';
import { useState } from 'react';
function App() {
  return (
   <>
   <Titulo texto="ToDo"></Titulo>
    <div class = "AgregarTarea">
    <Input label="Ingresar Tarea" type="text" name="tarea" classname='u-full-width' placeholder="ingresar tarea"></Input>
    <Button text="Agregar Tarea" type="submit" classname="u-full-width button-primary"> </Button>
    </div>
    <div class = "CalcularTareaMasRapida">
    <Button text="Calcular Tarea Mas Rapida" type="submit" classname="u-full-width button-primary"> </Button>
    </div>
   </>
  );
}

export default App;
