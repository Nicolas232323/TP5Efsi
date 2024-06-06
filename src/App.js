import React from 'react';
import './App.css';
import Titulo from './componentes/Titulo/Titulo';
import AgregarTarea from "./componentes/AgregarTarea/AgregarTarea";
import ToDo from './componentes/ToDo/ToDo';
import { useState } from 'react';
function App(props) {
  const [tarea, setTarea] = useState([]);
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
          </div>
          <div className="one-half column">
            <AgregarTarea tarea={tarea} setTarea={setTarea}></AgregarTarea>
            <div className="one-half column">
            {tarea.map(t => <div className="cita"><ToDo tarea={tarea} setTarea={setTarea} texto ={t.texto} fechayhora={t.fechayhora} fechayhoraT={t.fechayhoraT} id={t.id}></ToDo></div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
