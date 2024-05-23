import React from 'react';
import './Input.css';
const Input = ({ label = "label", type = "default", name = "default", classname = "default", placeholder = "default", value = "default" }) => {
    if (type === "textarea") {
        return (
            <>
                <label> {label} </label>
                <textarea name={name} className={classname}></textarea>
            </>
        )
    }
    return (
        <>
            <label> {label} </label>
            <input type={type} name={name} className={classname} value={value}></input>
        </>
    )
}
export default Input;