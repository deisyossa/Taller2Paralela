import { useContext } from "react";
import { AppContext } from "../providers/StateProvider";
import Deck from "./Deck";
import { Header } from "./Header";
import Result from "./Result";


export default function Gain() {

    const { player1, player2 } = useContext(AppContext)
    return (
        <div className="container text-center">
            <Header />
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <Result player={player1} />
                    </div>
                    <div className="col-6">
                        <Result player={player2} />
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-6">
                            <Deck player={player1} />
                        </div>
                        <div className="col-6">
                            <Deck player={player2} />
                        </div>
                    </div>








                </div>
            </div>
        </div>)

}