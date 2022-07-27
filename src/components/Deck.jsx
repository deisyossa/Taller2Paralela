import React, { useContext} from "react";
import { AppContext } from "../providers/StateProvider";
import Card from "./Card";

export default function Deck({ player }) {
  
  const ListarCartas = () => {
    const state = useContext(AppContext)
    if (player === state.player1)

      return (
        <div className="d-flex align-content-start flex-wrap">
          {state.p1Cards.map(({image}) => <Card url={image} key={image} />)}
        </div>
      );
    return (
      <div className="d-flex align-content-start flex-wrap">
        {state.p2Cards.map(({image}) => <Card url={image} key={image}/>)}
      </div>
    );
  }

  return (
    <div>
      <h6>Cartas Obtenidas</h6>
      <div className="overflow-scroll" >
        <ListarCartas />
      </div>

    </div>);
}
