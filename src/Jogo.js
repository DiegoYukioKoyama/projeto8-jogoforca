const imagem = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png", "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"]

function Jogo({comecarJogo, arrayPalavra}){
    return (
        <div className="jogo">
        <img src="assets/forca0.png" />
        <button onClick={comecarJogo} className="btn-escolher-palavra" >Escolher Palavra</button>
        <div className="palavra">
        {arrayPalavra.map((a) => <span className="array-palavra">{a}</span>)}
        </div>
        </div>
    )
}
export default Jogo
