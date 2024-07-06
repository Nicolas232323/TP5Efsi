import React from 'react';
import './Input.css';
const Input = ({ tipo = "default", nombre = "default", className = "default", placeholder = "default", setTachado, tachado }) => {
    if (tipo === "checkbox") {
        return (
            <>
                <input type={tipo} onChange={() => setTachado(!tachado)} name={nombre} placeholder={placeholder}></input>
            </>
        )
    }
    return (
        <>
            <input type={tipo} name={nombre} className={className} placeholder={placeholder}></input>
        </>
    )
}
export default Input;