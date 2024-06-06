import React from 'react';
import './Button.css';
const Button = ({text = "default", type = "default", clase = "null", EliminarToDo}) => {
if(clase === "button-elimnar u-full-width"){
    <button onClick = {EliminarToDo} type={type} className={clase}>{text}</button>
}

return(
<>
<button onClick = {EliminarToDo} type={type} className={clase}>{text}</button>
</>
)
    
}

export default Button;