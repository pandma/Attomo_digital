import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <>
            <section className='Footer'>
                <Container>
                    <Row>
                        <Col md={10}>
                            <h1>Descubre el nuevo marketplace de ocio y deporte.</h1>
                        </Col>
                    </Row>
                    <Row className='sellers'>
                        <Col md={6}>
                            <Row>
                                <Col md={3}>
                                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Vector_becsrt.png" alt="" />
                                </Col>
                                <Col md={9}>
                                    <p>ENTRADAS PARTIDOS Y TOURS</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={3}>
                                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Vector_1_bcdfcr.png" alt="" />
                                </Col>
                                <Col md={9}>
                                    <p>
                                        ENTRENAMIENTOS Y
                                        PARTIDOS EN CAMPOS OFICIALES
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row >
                        <div className='lineH'></div>
                        <div className='lineV'></div>
                    </Row>
                    <Row>
                        <Col className='vectors'>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Group_142_1_cqygqj.png" alt="" />
                        </Col>
                    </Row>
                </Container>

            </section>
            <section className='FooterSm'>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                UTILIZA SPORTBOX COMO PALANCA COMERCIAL
                            </h1>
                        </Col>
                    </Row>
                </Container>


            </section>
            <section >
                <Container>
                    <Row>
                        <Col>
                            <h1 className='contact'>CONTACTA CON NOSOTROS PARA CONOCER MÁS DE NUESTROS PRODUCTOS Y SERVICIOS</h1>
                            <img className='contactimg' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657142553/Group_125e_yvnxp3.png" alt="" />
                        </Col>
                    </Row>
                </Container>

            </section>
            <section className='lastFoot'>
                <Container>
                    <Row>
                        <Col>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657142423/Group_134fin_awwd3v.png" alt="" />

                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer