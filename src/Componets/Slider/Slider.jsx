import { Carousel } from 'react-carousel-minimal';


const Slider = () => {

    const data = [
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
    );
}

export default Slider