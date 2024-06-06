import './App.css';
import Button from './componentes/Button/Button';
import Input from './componentes/Input/Input';
import Titulo from './componentes/Titulo/Titulo';
import { useState } from 'react';
function App(props) {
  const [tarea, setCitas] = useState([]);
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
          </div>
          <div className="one-half column">
            <AgregarTarea></AgregarTarea>
            <div className="one-half column">
                 
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
