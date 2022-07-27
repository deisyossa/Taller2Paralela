import { createContext, useEffect, useState } from "react";
import { sala, getCards } from "../functions";

export const AppContext = createContext({ player1: '', player2: '', p1Cards: [], p2Cards: [], setPlayersNames: () => { }, roomId: '', addCards: () => { }, winner: '', cardsWinner: [] });

export default function Provider({ children }) {

    const dic = { HEARTS: 4, SPADES: 3, DIAMONDS: 2, CLUBS: 1 }
    const initialValues = { player1: '', player2: '', p1Cards: [], p2Cards: [], roomId: '', winner: '', cardsWinner: [] };
    const [state, setState] = useState(initialValues)
    useEffect(() => {
        (async function () {
            const roomId = await sala()
            setState({ ...state, roomId })
        })()
    }, [])

    const verifyWinner = () => {
        const positions = []
        function repetidos(arr) {
            return arr.some(function (v, i) {
                const index = arr.indexOf(v, i + 1)
                if (index > -1) {
                    positions.push(index, i)
                    return true
                }
                return false
            })
        }
        let isWinnerP1 = repetidos(state.p1Cards.map((card) => card.value))
        let isWinnerP2 = repetidos(state.p2Cards.map((card) => card.value))
        if (isWinnerP1 && isWinnerP2) {
            const firstCardP1 = state.p1Cards[positions[0]]
            const secondCardP1 = state.p1Cards[positions[1]]
            const firstCardP2 = state.p2Cards[positions[2]]
            const secondCardP2 = state.p2Cards[positions[3]]

            if (dic[firstCardP1] + dic[secondCardP1] > dic[firstCardP2] + dic[secondCardP2]) {
                isWinnerP2 = false
            } else
                isWinnerP1 = false
        }
        if (isWinnerP1) {
            setState({ ...state, winner: state.player1, cardsWinner: positions })

        }
        if (isWinnerP2) {
            setState({ ...state, winner: state.player2, cardsWinner: positions })
        }
    }
    const addCards = async () => {
        const newCards = await getCards(state.roomId);
        setState({ ...state, p1Cards: [...state.p1Cards, newCards[0]], p2Cards: [...state.p2Cards, newCards[1]] })
        setTimeout (verifyWinner,500)
    }



    const setPlayersNames = (player1, player2) => {
        setState({ ...state, player1, player2 })
    }

    return (
        <AppContext.Provider value={{ ...state, setPlayersNames, addCards }}>{children}</AppContext.Provider>);

}



