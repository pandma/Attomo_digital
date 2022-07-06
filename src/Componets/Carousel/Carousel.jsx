import './Carousel.css'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";


const Carrousel = () => {

    return (
        <section className='Carrousel'>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className='CarrTitle' >PORQUE EL FÚTBOL ES MUCHO MÁS QUE FÚTBOL</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='CarrSubtitle'>Utiliza nuestras experiencias como palanca comercial</p>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657139095/6ww_cpqwuo.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657139096/1eee_gk47zp.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657139095/6ww_cpqwuo.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657139096/1eee_gk47zp.png" />
                        </SwiperSlide>
                    </Swiper>
                    {/* <Col className='slidedescription1'>
                        <h1>
                            Tours INTERACTIVOS + planes de ocio
                        </h1>
                        <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657149348/Rectangle_149_edsjc3.png" alt="video" />
                    </Col>
                    <Col className='slidedescription2'>
                        <h1>
                            ENTRADAS EXCLUSIVAS
                        </h1>
                        <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657149348/Rectangle_149_edsjc3.png" alt="video" />
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Carrousel