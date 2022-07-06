import './Slider.css'
import { Carousel } from 'react-carousel-minimal';


const Slider = () => {

    const data = [
        {
            image: "https://res.cloudinary.com/dzzkeb6xp/image/upload/v1657105980/Copy_of_Tour_Athletic_Club_1_dvtwso.jpg",
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
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }


    return (
        <div className='carrousel'>
            <Carousel
                data={data}
                time={2000}
                width="100%"
                height="500px"
                radius="10px"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
            />
            <h1 className='title'>BE FUN. BE SOCIAL. BE STADIUM</h1>
        </div>
    );
}

export default Slider