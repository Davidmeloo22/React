import { useState } from "react"

export default function Main(){
    const [nome, SetNome] = useState("");
    const [fruta, SetFruta] = useState("uva");
    const MudarFruta = () => {("Laranja")}
    const MudarNome = () => {("Fernanda")}

    return (
   <h1>{nome}</h1>

)

}