import React, { useState } from 'react'
import { Card, Container } from "react-bootstrap";
import Jugadores from './Jugadores';

const Inicio = () => {
  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  
  return (
    <>
        <Container className="mt-5 pt-4 col-lg-5">
        <Card className="shadow-lg  mb-5 ">
          <Card.Header className="text-center ">
            <h2 className="display-4 ">Juego Deck of Cards</h2>
          </Card.Header>
          <Card.Body className="mt-2 p-3">
            <Jugadores nameOne={nameOne} setNameOne={setNameOne} nameTwo={nameTwo} setNameTwo={setNameTwo}>       
            </Jugadores>
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Inicio