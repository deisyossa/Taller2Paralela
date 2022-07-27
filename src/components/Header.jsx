import { useContext } from "react"
import { AppContext } from "../providers/StateProvider"

export function Header() {

    const { player1, player2, addCards, winner } = useContext(AppContext)

    return (
        <div className="d-flex justify-content-evenly mt-3">
            <h6>Jugador 1: {player1 === winner ? player1 : player1}</h6>
            <h1>{player1 === winner ? `GANADOR` : ''}</h1>
            <button className="btn btn-success" onClick={() => {
                addCards()
            }}>Jugar</button>
            <h6>Jugador 2: {player2 === winner ? player2 : player2}</h6>
            <h1>{player2 === winner ? `GANADOR` : ''}</h1>
        </div>
    )
}