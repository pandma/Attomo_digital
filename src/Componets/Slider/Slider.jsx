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
            <section className='Slider' >
                <Container fluid>
                    <Row>
                        <Col className='slideSection' md={12} xs={12}>
                            <div className='carrousel'>
                                <Carousel
                                    data={data}
                                    time={2000}
                                    width="100%"
                                    height="40%"
                                    automatic={true}
                                    dots={true}
                                    pauseIconColor="white"
                                    pauseIconSize="40px"
                                    slideBackgroundColor="darkgrey"
                                    slideImageFit="cover"
                                />
                            </div>
                            <Row>
                                <Col className='header' xs={12}>
                                    <h1 className='title'>
                                        <font color="#34FF98">BE </font>
                                        <font color="#ffffff">FUN.</font>
                                        <font color="#34FF98"> BE </font>
                                        <font color="#ffffff">SOCIAL.</font>
                                        <br />
                                        <font color="#34FF98">B</font>
                                        <font color="#ffffff">STADIUM</font>
                                    </h1>
                                    <h3 className='subTitle'>
                                        <font color="#ffffff">IMPULSA TU NEGOCIO Y SORPENDE A</font>
                                        <font color="#FFCC33"> TU EQUIPO COMERCIAL </font>
                                    </h3>
                                    <h3 className='PriceTag'>
                                        <font color="#ffffff">REGALA</font>
                                        <font color="#34FF98">EXPERIENCIAS</font>
                                        <font color="#ffffff">DESDE</font>
                                    </h3>
                                    <img className='price' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657147724/12_wccie9.png" alt="priceTag" />
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

            <section className='SliderPhone' >
                <Container fluid>
                    <Row>
                        <Col className='slideSectionPhone' md={12} xs={12}>
                            <Row>
                                <Col className='headerPhone' xs={12}>
                                    <Row>
                                        <Col xs={12}>
                                            <h1 className='titlePhone'>
                                                <font color="#34FF98">BE </font>
                                                <font color="#ffffff">FUN.</font>
                                                <font color="#34FF98"> BE </font>
                                                <font color="#ffffff">SOCIAL.</font>
                                                <br />
                                                <font color="#34FF98">B</font>
                                                <font color="#ffffff">STADIUM</font>
                                            </h1>
                                        </Col>
                                        <Col xs={12}>
                                            <h3 className='subTitlePhone'>
                                                <font color="#ffffff">IMPULSA TU NEGOCIO Y SORPRENDE A TU EQUIPO, CLIENTES Y RED COMERCIAL CON</font>
                                                <font color="#FFCC33"> EXPERIENCIAS DEPORTIVAS ORIGINALES Y EXCLUSIVAS </font>
                                            </h3>
                                        </Col>
                                        <Col xs={6}>
                                            <h3 className='PriceTagPhone'>
                                                <font color="#ffffff">REGALA</font>
                                                <font color="#34FF98"> SPORTBOX</font>
                                                <font color="#ffffff"> DESDE</font>
                                            </h3>
                                        </Col>
                                        <Col xs={6}>
                                            <img className='pricePhone' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657147724/12_wccie9.png" alt="priceTag" />
                                        </Col>
                                        <Col>
                                            <img className='WhatsappLogo' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657193846/Vector_ksrk2r.png" alt="priceTag" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={6}>
                                    <img className='sptPhone' src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657116460/sportboxsport_bejqd9.png" alt="" srcset="" />
                                </Col>
                                <Col xs={6} md={{ span: 4, offset: 9 }}>
                                    <Button className='catlogPhone' variant="warning">
                                        <p>DESCUBRE NUSTRO CATALOGO
                                        </p> </Button>
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