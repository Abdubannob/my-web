import styled from "styled-components";
import { NavLink } from "react-router-dom"
export const Headers = styled.header`
    max-width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #222;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
    overflow: hidden;
    @media screen and (max-width: 600px) {
        height: 80px;
    }
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    .active{
        color: gray;
    }
`
export const HeaderContainer = styled.div`
    width: 1300px;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    position: relative;
    img{
        width: 100px;
        
    }
    @media screen and (max-width: 600px) {
        height: 80px;
        img{
            width: 80px;
        }
    }
`
export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
`