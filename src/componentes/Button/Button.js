import React from "react";
import './Button.css';
const Button = ({text = "default", type = "default", classname = "default"}) => {
    return (
        <>
            <button type={type} className={classname}>{text}</button>
        </>
    )
}

export default Button;