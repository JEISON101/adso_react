import "./App.css";
import { Change } from "./components/change";
//import { Lista } from "./components/lista";

export interface Personaje {
  id: number;
  img: string;
  nombre: string;
  potencia: number;
  carga: number;
  velocidad: number;
}

function App() {

  return (
    <>
      <Change/>  
    </>
  );
};

export default App;
