import './Slider.css'
import { Carousel } from 'react-carousel-minimal';
import { Button, Container, Row, Col } from 'react-bootstrap';


const Slider = () => {

    const data = [
        {
            image: '../../../img/tour.jpg',
        },
        {
            image: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657105980/Copy_of_Tour_Athletic_Club_1_dvtwso.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657105979/eventto_pnitj7.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657105979/2._Tour-interactivo-Nuevo-Los-Carmenes-estadio-del-Granada-Club-de-Futbol-Galeria-12-1_lfhmqk.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657105979/eventto_pnitj7.jpg",
        },

    ];

    return (
        <>
            <section >
                <Container fluid>
                    <Row>
                        <Col className='slideSection' md={12} s={12}>
                            <div className='carrousel'>
                                <Carousel
                                    data={data}
                                    time={2000}
                                    width="100%"
                                    height="766px"
                                    automatic={true}
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="cover"
                                />
                            </div>
                            <Row>
                                <Col className='header'>
                                    <div className='title'>
                                        <h1 >BE FUN. BE SOCIAL. BE STADIUM</h1>
                                    </div>
                                    <div>
                                        <h1 className='subTitle'>IMPULSA TU NEGOCIO Y SORPENDE A TU EQUIPO COMERCIAL</h1>
                                    </div>
                                    <div>
                                        <h1 className='PriceTag'>REGALA EXPERIENCIAS DESDE 12€</h1>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={6}>
                                    <img className='spt' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657116460/sportboxsport_bejqd9.png" alt="" srcset="" />
                                </Col>
                                <Col xs={6} md={{ span: 4, offset: 9 }}>
                                    <Button className='catlog' variant="warning">DESCUBRE NUSTRO CATALOGO</Button>
                                </Col>
                            </Row>

                        </Col>




                    </Row>
                </Container>



            </section>
        </>
    );
}

export default Slider