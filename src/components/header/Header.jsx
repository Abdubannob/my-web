import logo from "../../images/adeel-hassan-bird-logo-removebg-preview.png"
import { Headers, HeaderContainer, Navigation, NavigationLink } from "../../styled/header.styled";
const Header = () => {
    return ( 
        <Headers>
            <HeaderContainer >
            <img src={logo} alt="" />
            <div className="comp-version">
            <Navigation >
                <NavigationLink to="my-web/" >HOME</NavigationLink>
                <NavigationLink to="/about" >ABOUT</NavigationLink>
                <NavigationLink to="/skills" >SKILLS</NavigationLink>
                <NavigationLink to="/portfolio" >PORTFOLIO</NavigationLink>
                <NavigationLink to="/blog" >BLOG</NavigationLink>
            </Navigation>
            </div>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="liner">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
            <div className="phone-version">
            <Navigation className="navs-header">
                <NavigationLink to="my-web/" >HOME</NavigationLink>
                <NavigationLink to="/about" >ABOUT</NavigationLink>
                <NavigationLink to="/skills" >SKILLS</NavigationLink>
                <NavigationLink to="/portfolio" >PORTFOLIO</NavigationLink>
                <NavigationLink to="/blog" >BLOG</NavigationLink>
            </Navigation>
            </div>
            </HeaderContainer>
        </Headers>
        );
}
 
export default Header;