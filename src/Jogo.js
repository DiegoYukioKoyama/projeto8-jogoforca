import palavras from "./palavras"
import comecarJogo from "./comecarJogo"
const imagem = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"]


function Jogo(){
    return (
        <div className="jogo">
        <img src="assets/forca0.png" />
        <button onClick={comecarJogo} className="btn-escolher-palavra" >Escolher Palavra</button>
        </div>
    )
}
export default Jogo