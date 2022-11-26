import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

function App() {
  const [palavraSelecionada, setPalavraSelecionada] = useState("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  let palavra = ""
  function comecarJogo(){
    if(palavraSelecionada){
    }
    else{
      palavra = palavras[Math.floor(Math.random() * palavras.length)]
      setPalavraSelecionada(palavra)

        for(let i=0;i<palavra.length;i++){
          arrayPalavra.push("_")
        }
        const novaArrayPalavra = [...arrayPalavra]
        setArrayPalavra(novaArrayPalavra)
        console.log(palavra)
        console.log(novaArrayPalavra.length)
    }
  }

  return (
    <div className="root">
    <Jogo comecarJogo={comecarJogo} arrayPalavra={arrayPalavra} />
    <Letras condicao={palavraSelecionada} />
    <Chute />
    </div>
  )
}
export default App
