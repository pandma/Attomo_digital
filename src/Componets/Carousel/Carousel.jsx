import './Carousel.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
const Carrousel = () => {

    return (
        <section>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>PORQUE EL FÚTBOL ES MUCHO MÁS QUE FÚTBOL</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Utiliza nuestras experiencias como palanca comercial</p>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
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
                        scrollbar={true}
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
                </Row>
            </Container>
        </section>
    )
}

export default Carrousel