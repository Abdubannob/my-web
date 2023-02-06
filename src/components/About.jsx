import { AboutContainer, Container, HeroContainer } from "../styled/Container";
import Youtube from "../images/youtube.svg"
import Facebook from "../images/facebook.svg"
import twitter from "../images/telegram.svg"
import instagram from "../images/instagram (1).svg"
import me from "../images/abdubannob.jpg"
import ball from "../images/ball.png"
import "../media/AboutMedia.css"
import { Airplane, Film, Headphones } from "react-bootstrap-icons";

const About = () => {

    const information =[
        {Name: "Abduhamidov Abdubannob"},
        {birth: " June 22, 1999"},
        {Adress: "Uzbekistan, Fergana"},
        {Email: "abduhamidovm52@gmail.com"},
        {Phone: "+998911131014"}
    ]

    return ( <div>
         <HeroContainer>
        <Container className="about-intro">
        <div className="right-text-me">
        <h2>Hello! I am Abdubannob</h2>
        <h1>ABOUT ME</h1>
        <h2>
        Hi, I'm Abdubannob – Junior Web Developer from Fergana. I'm interested in codering and everything connected with it.
        
        </h2>
     </div>
    <div className="abouts">
    <div className="left-about-img">
        <img src={me} alt="me" />
        <div className="extra">
        <img src={Youtube} alt="Youtube" />
            <a href="https://www.facebook.com/abdubannob.abduhamidov.1">
            <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://t.me/Abdukhamidov99">
            <img src={twitter} alt="twitter" />

            </a>
            <img src={instagram} alt="instagram" />
        </div>
     </div>
     <div className="intro-items">
        <h3>MY INTRO</h3>
        <div className="intro-item">
            <p>Name:</p> 
            <span>Abdubannob Abduhamidov</span>
        </div>
        <div className="intro-item">
            <p>Date of birth:</p> 
            <span>June 22, 1999</span>
        </div>
        <div className="intro-item">
            <p>Address:</p> 
            <span>Uzbekistan, Fergana</span>
        </div>
        <div className="intro-item">
            <p>Email:</p> 
            <span>abduhamidovm52@gmail.com</span>
        </div>
        <div className="intro-item">
            <p>Phone:</p> 
            <span>+998 91 113 10 14</span>
        </div>

        <div className="hobby">
            <div className="hobby-item">
            <Headphones/> <h4>Music</h4>
            </div>
            <div className="hobby-item">
            <Airplane/> <h4>Travel</h4>
            </div>
            <div className="hobby-item">
            <Film/> <h4>Movie</h4>
            </div>
            <div className="hobby-item">
            <img src={ball} alt="ball" /> <h4>Sports</h4>
            </div>
        </div>
     </div>
    </div>

       
        </Container>
    </HeroContainer> 
    
    <AboutContainer>
        <Container>
        <div className="about2">
            <p>I'm Front End Developer</p>
            <div className="right-about-img">
                <h2>I'm studying at courses "Web developing" in IT-Academy.</h2>  
            </div>
        </div>
        <div className="about3">
            <div className="right-about-img">
                <h2>I graduated Fergana polytechnic institute in 2022 year.</h2>  
            </div>
            <h3>
            I graduated from Fergana Polytechnic Institute in 2022, majoring in computer engineering. After that, I graduated from web programming. I am currently a front end developer.
            <h1>FACULTY OF KLT</h1>
            </h3>
            
        </div>
    
        </Container>
    </AboutContainer>
    </div>);
}
 
export default About;