import React from "react";
import { Personaje } from "../App";

type P = {
  personajes: Personaje[];
};

export const Card: React.FC <P> = ({ personajes }) => {
  return (
    <>
      {personajes.map((pers) => (
        <div key={pers.id} className="card">
          <img src={pers.img} alt={pers.nombre} className="imagen"/>
          <h1>{pers.nombre}</h1>
          <p>Potencia: {pers.potencia}</p>
          <p>Carga: {pers.carga}</p>
          <p>Velocidad: {pers.velocidad}</p>
        </div>
      ))}
    </>
  );
};
