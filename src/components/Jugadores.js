import React from 'react'
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import "../estilos/estilo.css"


const Jugadores = ({ nameOne, setNameOne,nameTwo,setNameTwo }) => {

    const handleChange = ({ target }) => {
        setNameOne(target.value);
    };
    const handleChangeUserTwo = ({ target }) => {
        setNameTwo(target.value);
    };

    return (
        <Container>
            <Form >
                <Form.Group className="mb-3">
                    <Row>
                        <Col xs={1} className="my-auto text-end">
                        </Col>
                        <Col>
                            <Form.Label>Jugador 1</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Nombre del jugador 1"
                                    value={nameOne}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                            <Form.Label>Jugador 2</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Nombre del jugador 2"
                                    value={nameTwo}
                                    onChange={handleChangeUserTwo}
                                    required
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                </Form.Group>
                <div className="text-center">
                    <Button variant="outline-primary" type="submit" className="px-3">
                        <span className="span-bold mx-5">Jugar</span>
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Jugadores