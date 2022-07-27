import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../providers/StateProvider";
import Card from "./Card";

export default function Result({ player }) {
    const linkImage = 'https://pm1.narvii.com/6306/6b88f66e098ee509cb3e790535a989a026c57c3e_hq.jpg'

    const { winner, cardsWinner, p1Cards, p2Cards, player1 } = useContext(AppContext)

    const [cards, setCards] = useState({card:linkImage, card1:linkImage})
    const getCards = useCallback(() => {
        if (player1 === player) {
            setCards({ card: p1Cards[cardsWinner[0]].image, card1: p1Cards[cardsWinner[1]].image })
        }
        else {
            setCards({ card: p2Cards[cardsWinner[0]].image, card1: p2Cards[cardsWinner[1]].image })
        }
    }, [cardsWinner, p1Cards, p2Cards, player, player1])
    useEffect(() => {
        if (winner) {
            getCards()
        }
    }, [winner, getCards])
    return (
        <div className="container text-center">
            <div className="row">
                <p className="text-center">Cartas Opcionadas</p>
            </div>
            <div className="row">
                <div className="col-6"><Card url={winner === player ? cards.card : (linkImage)} /></div>
                <div className="col-6"><Card url={winner === player ? cards.card1 : (linkImage)} /></div>
            </div>

        </div>);
}