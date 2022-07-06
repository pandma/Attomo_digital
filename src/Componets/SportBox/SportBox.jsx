import './SportBox.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const SportBox = () => {

    return (
        <section className='SortBox'>
            <Container fluid>
                <Row className='sortBoxTitle'>
                    <h1>VENTAJAS DE SPORTBOX</h1>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657133154/Nuevo_Sportbox_2_1sportbox_camkgr.png" alt="Sport Book" />

                    </Col>
                    <Col className='items' md={{ span: 6 }}>
                        <Row className='itemrow' >
                            <Col md={{ span: 3 }}>
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657133153/Vectorvec1_pttusz.png" alt="items" />
                            </Col>
                            <Col md={{ span: 9 }}>
                                <p>Más de 150 experiencias de prestigio y calidad a escoger</p>
                            </Col>
                        </Row>
                        <Row className='itemrow'>
                            <Col md={{ span: 3 }}>
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657133153/Vectorvec2_h37ish.png" alt="items" />
                            </Col>
                            <Col md={{ span: 9 }}>
                                <p>
                                    Te asesoramos tu pack en base a tus objetivos y perfil de clientes
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 3 }}>
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657133153/Vectorvec3_a8tbqp.png" alt="items" />
                            </Col>
                            <Col md={{ span: 9 }}>
                                <p>
                                    Garantizamos los mejores descuentos para que tus clientes y equipo comercial viva una experiencia inolvidable
                                </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 12 }}>
                        <p className='sportBoxTag'>Nuestros expertos te ayudarán a personalizar tu pack que sorprenderá a tu equipo, clientes y red comercial.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={{ span: 4, offset: 4 }}>
                        <Button className='SportBoxbtn' variant="warning">DESCUBRE NUSTRO CATALOGO</Button>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default SportBox