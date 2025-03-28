import { useState } from "react"


export const Formulario: React.FC = () => {

    const [nombre, setnombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const enviar = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`LOS DATOS DEL USUARIO SON:
            Nombre: ${nombre}
            Email: ${email}
            Password ${pass}`);
    }
    

    return (
        <>
            <form onSubmit={enviar}>
                <label htmlFor="">Nombre completo</label>
                <input type="text" onChange={(event)=>{setnombre(event.target.value)}}/>

                <label htmlFor="">Email</label>
                <input type="email" onChange={(event)=>{setEmail(event.target.value)}}/>

                <label htmlFor="">Password</label>
                <input type="password" onChange={(event)=>{setPass(event.target.value)}}/>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}