import { ExtraSkills, ExtraSkillsNone, SkillsContainer } from "../styled/Container";
import { useState } from "react";
import html from "../images/4844522.png"
import starfill from "../images/StarFill.png"
import star from "../images/star.png"
import img from "../images/ab.PNG"
import Css from "../images/css3-removebg-preview.png"
import sass from "../images/sass-removebg-preview.png"
import tailwind from "../images/tailwindcss.svg"
import js from "../images/javascript.png"
import bootstrap from "../images/bts.png"
import jquery from "../images/jquery_icon_400x400.png"
import react from "../images/react2.png"
import figma from "../images/figma_logo_icon_170157-removebg-preview.png"
import view from "../images/view.png"
import "../media/SkillsMedia.css"
const Skills = () => {
    const [check, setCheck] = useState(false)

    const skill = [
        {
            image: html,
            name: "HTML",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: Css,
            name: "CSS",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: sass,
            name: "SASS",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: bootstrap,
            name: "BOOTSTRAP",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: tailwind,
            name: "TAILWINDCSS",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: js,
            name: "JAVASCRIPT",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: jquery,
            name: "JQUERY",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: react,
            name: "REACT JS",
            star:
            {
                starfill: starfill
            }
        },
        {
            image: figma,
            name: "FIGMA",
            star:
            {
                starfill: starfill
            }
        }
    ]

    const handlerCheck = () => {
        setCheck(!check)
    }

    return (<div>
        <SkillsContainer>
            <div className="item-skill">
                <div className="items-skill">
                    <div className="right-skill">
                        <h1>Skills</h1>
                        <div className="image">
                            <img src={img} alt="image" />
                        <div class="wallpaper--onhover">
                     <img src={view} className="nn" alt="eye" style={{width: 50, height: 50}}/>
                        </div>
                        </div>
                        <h1>Abdubannob</h1>
                        <div className="vvv">
                            <div className="my-skill">
                                {
                                    skill.map((e) => <div class="adobe">
                                        <img class="img" src={e.image} alt="html" />
                                        <p>{e.name}</p>
                                        <span>
                                            <img class="str"  src={e.star.starfill} alt="star" />
                                            <img class="str"  src={e.star.starfill} alt="star" />
                                            <img class="str"  src={e.star.starfill} alt="star" />
                                            <img class="str"  src={e.star.starfill} alt="star" />
                                            <img class="str"  src={star} alt="star" />
                                        </span>
                                    </div>)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="middle-skill">
                        {
                            check ?
                                <ExtraSkills>
                                    <div className="my-skill">
                                        {
                                            skill.map((e) => <div class="adobe">
                                                <img class="img" src={e.image} alt="html" />
                                                <p>{e.name}</p>
                                                <span>
                                                    <img class="str" src={e.star.starfill} alt="star" />
                                                    <img class="str" src={e.star.starfill} alt="star" />
                                                    <img class="str" src={e.star.starfill} alt="star" />
                                                    <img class="str" src={e.star.starfill} alt="star" />
                                                    <img class="str" src={star} alt="star" />
                                                </span>
                                            </div>)
                                        }

                                    </div>
                                </ExtraSkills>
                                : <ExtraSkillsNone />}
                        <input type="checkbox" id="dcheck" />
                        <label htmlFor="dcheck" className="lines" onClick={() => handlerCheck()} setCheck={setCheck} >
                            <div className="line" > </div>
                            <div className="line" ></div>
                            <div className="line" ></div>
                        </label>

                    </div>
                </div>

                <div className="left-skill">

                </div>
            </div>

        </SkillsContainer>
    </div>);
}

export default Skills;