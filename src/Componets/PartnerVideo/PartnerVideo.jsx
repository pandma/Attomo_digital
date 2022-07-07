import './PartnerVideo.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const PartnerVideo = () => {
    return (
        <section className='PartnerVideo'>
            <Container fluid>
                <Row className='PartnerTitle' >
                    <Col xs={12}>
                        <h1 >MÁS DE 150 EXPERIENCIAS EXCLUSIVAS DE LOS CLUBES DE FÚTBOL MÁS RECONOCIDOS</h1>
                    </Col>
                </Row>
                <Row className='PartnerTitleP' >
                    <Col xs={12}>
                        <p >Marca la diferencia en tu sector con la mejor selección de incentivos para captación y fidelización.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >
                        <div className="black" />
                    </Col>
                </Row>

                <Row className='thirdTitle'>
                    <Col>
                        <p>Empresas que confían en nosotros</p>

                    </Col>
                </Row>
                <Row className='partner'>
                    <Col>
                        <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657131452/Group_135logos_smb0ir.png" alt="" srcset="" />
                    </Col>
                </Row>
                <Row className='partnerPhone'>
                    <Col>
                        <Row>
                            <Col xs={6}>
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/Torres_urjtxq.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/logo-codere-new-v2_bfkzlg.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/E710_mlrmly.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/Marca_xjojxj.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657195723/SEUR_khoqop.png" alt="" />
                            </Col>
                            <Col xs={6}>
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/Logo-Damm_fuekpy.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/Cruzados_la1saw.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188246/1280px-Lexus_1_kh5nku.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/MSF_orspgw.png" alt="" />
                                <br />
                                <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657188247/Toro_t1oru6.png" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default PartnerVideo