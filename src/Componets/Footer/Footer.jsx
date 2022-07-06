import './Footer.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


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
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Vector_becsrt.png" alt="" srcset="" />
                                </Col>
                                <Col md={6}>
                                    <p>ENTRADAS PARTIDOS Y TOURS</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Vector_1_bcdfcr.png" alt="" srcset="" />

                                </Col>
                                <Col md={6}>
                                    <p>
                                        ENTRENAMIENTOS Y
                                        PARTIDOS EN CAMPOS OFICIALES
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657143133/Group_142_1_cqygqj.png" alt="" srcset="" /></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <h1>CONTACTA CON NOSOTROS PARA CONOCER MÁS DE NUESTROS PRODUCTOS Y SERVICIOS</h1>
                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657142553/Group_125e_yvnxp3.png" alt="" srcset="" />
            </section>

            <section className='lastFoot'>
                <div>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657142423/Group_134fin_awwd3v.png" alt="" srcset="" />
                </div>
            </section>

        </>
    )
}

export default Footer