import me from "../images/home-right.png.webp"
import { Container, HeroContainer } from "../styled/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../media/home.css"
import cv from "../resume/CVletter.pdf"
const Home = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return ( <div>
        <div className="about-container">
        <Container className="cc">
        <div className="home">
        <div data-aos-duration="1500"  data-aos="fade-right" className="about-me-left">
            <h2>HELLO EVERYONE</h2>
            <h1><span>I AM</span> ABDUBANNOB </h1>
            <div className="me">
            <h4>JUNIOR WEB DEVELOPER</h4>
            <h4>23 YEARS OLD, FERGANA</h4>
            </div>
            <button><a href={cv} download >Download CV</a></button>
        </div>
        <div className="about-me-right" data-aos-duration="1500"  data-aos="fade-left">
            <img src={me} alt="me" />
        </div>
    </div>
        </Container>
        </div>
    </div> );
}
 
export default Home;