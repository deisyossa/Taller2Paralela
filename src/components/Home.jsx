import React, {useContext} from "react";
import { AppContext } from "../providers/StateProvider.js";
import { useNavigate } from "react-router-dom";

export default function Inicio () {

  const {setPlayersNames, roomId} = useContext(AppContext)
  const navigate = useNavigate()
  
  return (
    <div className="mt-5 pt-4 col-lg-5 container">
    
    <div className="shadow-lg  mb-5  card">
      <div className="text-center  card-header">
        <h2 className="display-4 ">Juego Deck of Cards</h2>
      </div>
      <div className="mt-2 p-3 card-body">
    
        <form className="d-flex justify-content-center mt-5"
          onSubmit={ev =>{
            ev.preventDefault();
            const jugador1 = ev.target.jugador1.value
            const jugador2 = ev.target.jugador2.value
            setPlayersNames(jugador1, jugador2)
            navigate(`/jugador/partida/${roomId}`)
          }}>
              <div className="col">
                <img className="imagenPrincipal" src={require('../img/cartas.jpg')} />
              </div>
            <div className="col">
              <label className="form-label">Jugador 1</label>
              <div className="row mb-4">
              <input className="me-4" 
                type="text" 
                name="jugador1" 
                placeholder="Ingrese su nombre"
                autoComplete="off"
                ></input>
              </div>
              <div className="row mb-4">
                <label className="form-label">Jugador 2</label>
                <input 
                  type="text" 
                  name="jugador2" 
                  placeholder="Ingrese su nombre"
                  autoComplete="off"
                  ></input>
              </div>
              <button className="btn btn-success" type="submit">Ingresar</button>
            </div>
        </form>
        </div>
      </div>
    </div>

    );
}

