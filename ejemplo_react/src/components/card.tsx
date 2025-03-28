import React, { useState } from "react";
import { Personaje } from "../App";
import { Propiedades } from "./propiedades";

type P = {
  personajes: Personaje[];
};

export const Card: React.FC <P> = ({ personajes }) => {

  const [prop, setProp] = useState('no');
  const [data, setData] = useState({
    id:0,
    img:'',
    nombre:'',
    potencia:0,
    carga:0,
    velocidad:0
    });

  return (
    <>
      {personajes.map((pers) => (
        <div key={pers.id} className="card" onClick={()=> {
          setData(pers);
          setProp('si')}}>
          <img src={pers.img} alt={pers.nombre} className="imagen" />
          <h1>{pers.nombre}</h1>
          
        </div>
      ))}

      <div className={`${prop? 'si':'no' }`}>
        <Propiedades data={data}/>
      </div>
    </>
  );
};
