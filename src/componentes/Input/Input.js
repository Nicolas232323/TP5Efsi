import React from 'react';
import './Input.css';
const Input = ({ label = "label", tipo = "default", nombre = "default", className = "default", placeholder = "default" }) => {
    if (tipo === "textarea") {
        return (
            <>
                <label> {label} </label>
                <textarea name={nombre} className={className}></textarea>
            </>
        )
    }
    return (
        <>
            <label> {label} </label>
            <input type={tipo} name={nombre} className={className} placeholder={placeholder}></input>
        </>
    )
}
export default Input;