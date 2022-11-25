import comecarJogo from "./comecarJogo"
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras(){
    
        return (
            <div className="letras">
                {alfabeto.map((a) => <button className="btn-letras-desativado">{a.toUpperCase()}</button>)}
            </div>
        )
    }


export default Letras