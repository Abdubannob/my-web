import { Container, HeroContainer } from "../styled/Container";
import bmw from "../portfolioImage/second.PNG"
import weather from "../portfolioImage/weatherday-removebg-preview.png"
import first from "../portfolioImage/first.PNG"
import bm from "../portfolioImage/bmw.PNG"
import letter from "../portfolioImage/letter.PNG"
import func from "../portfolioImage/function.PNG"
import figma from "../portfolioImage/third.PNG"
import todo from "../portfolioImage/todoJquery.PNG"
import watch from "../portfolioImage/last.PNG"
import search from "../portfolioImage/search.svg"
import "../media/portfolio.css"
const Portfolio = () => {
    return (<div>

        <HeroContainer>
            <Container>
            
                <div className="portfolios">
                   
                    <div className="box box1">
                        <p>Portfolio</p>
                        <span>Far far away, behind the word mountains, <br /> far from the countries Uzbekistan</span>
                    </div>
                    <div className="box box2">
                        <img src={bmw} alt="second" />
                        <div className="hover-effect">
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/Second_website_two/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box3">
                        <img src={weather} alt="weather" />
                        <div className="hover-effect">
                            
                            <div className="btn">
                                <button><a href="">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box4">
                        <img src={bm} alt="bmw" />
                        <div className="hover-effect">
                            
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/Second_website_two/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box5">
                        <img src={first} alt="" />
                        <div className="hover-effect">
                            <img src={search} alt="" />
                            <p>Work 1</p>
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/my_first-website/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box6">
                        <img src={letter} alt="letter" />
                        <div className="hover-effect">
                            
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/letter_game/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box7">
                        <img src={figma} alt="figma" />
                        <div className="hover-effect">
                            
                           <div className="btn">
                             <button><a href="https://abdubannob.github.io/figma/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                           </div>
                        </div>
                    </div>
                    <div className="box box8">
                        <img src={func} alt="function" />
                        <div className="hover-effect">
                            
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/function-game/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box9">
                        <img src={todo} alt="todo" />
                        <div className="hover-effect">
                            
                            <div className="btn">
                                <button><a href="https://abdubannob.github.io/todo/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="box box10">
                        <img src={watch} alt="watch" />
                        <div className="hover-effect">
                            
                           <div className="btn">
                             <button><a href="https://abdubannob.github.io/">Preview</a></button>
                            {/* <button><a href="">Code</a></button> */}
                           </div>
                        </div>
                    </div>
                </div>
            </Container>
        </HeroContainer>
    </div>);
}

export default Portfolio;