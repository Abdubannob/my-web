import styled from "styled-components";
import gg from "../images/bg-hero.PNG"


export const HeroContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to top, #f9fafb, #f3f4f6);

`
// export const AboutContainer = styled.div`

// `

export const Container = styled.div`
    max-width: 1300px;
    min-height: 100vh;
    margin: auto;

`
export const PrefooterSize = styled.div`
    width: 100%;
    height: 150px;
    background: linear-gradient(to right, #5b21b6, #be123c);
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        filter: invert(780%) sepia(9%)  hue-rotate(246deg) brightness(111%) contrast(198%);
    }
    @media screen and (max-width: 760px) {
        width: 100%;
    height: 120px;
    img{
        width: 25px;
    }
    }
`
export const AboutContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to right, #dcfce7, #dcfce7);
    padding: 100px 20px;
    @media screen and(max-width: 750px){
        padding: 120px 20px;
    }
`
export const SkillsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
`
export const ExtraSkills = styled.div`
    position: absolute;
    width: 71%;
    height: 650px;
    left: 30%;
    top: 0;
    background-color: #cffafe;
    transition: all .8s linear;
    padding: 10px 20px;
   overflow-y: scroll;
   @media screen and (max-width: 820px) {
    position: absolute;
    width: 100%;
    /* height: 650px; */
    left: 0;
    top: 260px;
    background-color: #cffafe;
    transition: all .8s linear;
    padding: 10px 20px;
 
   }
`
export const ExtraSkillsNone = styled.div`
    position: absolute;
    width: 70%;
    height: 650px;
    left: -70%;
    top: 0;
    background-color: blueviolet;
    transition: all .4s linear;
`
