import AddFooter from "../Componets/AddFooter/AddFooter"
import Carrousel from "../Componets/Carousel/Carousel"
import Footer from "../Componets/Footer/Footer"
import LogoSlider from "../Componets/LogoSlider/LogoSlide"
import PartnerVideo from "../Componets/PartnerVideo/PartnerVideo"
import Slider from "../Componets/Slider/Slider"
import SportBox from "../Componets/SportBox/SportBox"


const HomePage = () => {
    return (
        <>
            <Slider />
            <LogoSlider />
            <PartnerVideo />
            <SportBox />
            <Carrousel />
            <Footer />
            <AddFooter />
        </>
    )

}
export default HomePage