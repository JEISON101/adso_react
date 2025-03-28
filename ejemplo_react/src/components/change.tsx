import React from "react"

 export const Change: React.FC = () => {

    let name: string = '';
    let lastename: string = '';

    let nombre = (val:string) => {
        name = val;
    }
    let apellido = (val:string) => {
        lastename = val;
    }
    let enviar = () => {
        alert(`Bienvenido: ${name} ${lastename}`);
    }

    return(
        <div className="change">
            <input type="text" placeholder="nombre" onChange={(event)=>{nombre(event.target.value)}}/>
            <input type="text" placeholder="apellido" onChange={(event)=>{apellido(event.target.value)}}/>
            <button onClick={enviar}>enviar</button>
        </div>
    )
 }