import React from "react";
import { Personaje } from "../App";
import { Card } from "./card";

export const Lista: React.FC = () => {

    const personajes: Personaje[] = [
        {id:1, img:'' ,nombre:'Perro', potencia:100, carga:80, velocidad:50,},
        {id:2, img:'' ,nombre:'Gato', potencia:60, carga:100, velocidad:40,},
        {id:3, img:'' ,nombre:'León', potencia:80, carga:50, velocidad:30,},
        {id:4, img:'' ,nombre:'Águila', potencia:30, carga:80, velocidad:90,},
        {id:5, img:'' ,nombre:'Leopardo', potencia:10, carga:30, velocidad:70,},
        {id:6, img:'' ,nombre:'Cobra', potencia:50, carga:90, velocidad:40,},
        {id:7, img:'' ,nombre:'Cocodrilo', potencia:60, carga:20, velocidad:60,},
        {id:8, img:'' ,nombre:'Pollo', potencia:30, carga:90, velocidad:70,}
    ]

    return(
        <>
            <Card personajes={personajes}/>
        </>
    );
}