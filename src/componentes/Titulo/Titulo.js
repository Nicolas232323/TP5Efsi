import React from 'react';
import './Titulo.css';
const Titulo = ({ texto = "default" }) => {
    return(
        <h1>{texto}</h1>
    )

}
export default Titulo;