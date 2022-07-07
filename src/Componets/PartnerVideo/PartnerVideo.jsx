import './PartnerVideo.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const PartnerVideo = () => {
    return (
        <section className='PartnerVideo'>
            <Container>
                <Row className='PartnerTitle' >
                    <Col xs={12}>
                        <h1 >MÁS DE 150 EXPERIENCIAS EXCLUSIVAS DE LOS CLUBES DE FÚTBOL MÁS RECONOCIDOS</h1>
                        <p >Marca la diferencia en tu sector con la mejor selección de incentivos para captación y fidelización.</p>

                    </Col>

                </Row>
                <Row>
                    <Col>
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
                        <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657131452/Group_135logos_smb0ir.png" alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PartnerVideo