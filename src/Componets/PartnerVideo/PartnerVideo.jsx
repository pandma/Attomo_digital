import './PartnerVideo.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const PartnerVideo = () => {
    return (
        <section className='PartnerVideo'>
            <Container>
                <Row className='PartnerTitle' >
                    <h1 >MÁS DE 150 EXPERIENCIAS EXCLUSIVAS DE LOS CLUBES DE FÚTBOL MÁS RECONOCIDOS</h1>
                    <p >Marca la diferencia en tu sector con la mejor selección de incentivos para captación y fidelización.</p>
                </Row>
                <div className="black" />
                <Row className='thirdTitle'>
                    <p>Empresas que confían en nosotros</p>
                </Row>
                <Row className='partner'>
                    <img src="https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657131452/Group_135logos_smb0ir.png" alt="" srcset="" />
                </Row>
            </Container>
        </section>
    )
}

export default PartnerVideo