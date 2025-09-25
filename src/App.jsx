import Hero from "./section/Hero.jsx";
import ShowcaseSection from "./section/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeaturedCards from "./section/FeaturedCards.jsx";
import Experience from "./section/Experience.jsx";
import TechStack from "./section/TechStack.jsx";
import Testimonials from "./section/Testimonials.jsx";
import Footer from "./section/Footer.jsx";


const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <LogoSection/>
            <FeaturedCards/>
            <Experience/>
            <TechStack/>
            <Testimonials/>
            <Footer/>

        </>
    )
}
export default App
