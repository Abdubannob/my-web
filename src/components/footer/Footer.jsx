import visa from "../../images/visa-card.png"
import master from "../../images/master-card.png"
import exp from "../../images/american-express.png"
import paypal from "../../images/cc-paypal.png"
import sec from "../../images/lock.png"
const Footer = () => {
    return (<div className="container ">
        <div className="footer" >
        <div className="lefts">
            <h1>Abdubannob</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, voluptatem?</p>
            <div className="navs">
                <a href=""><img src={visa} alt="visa" /></a>
                <a href=""><img src={master} alt="master" /></a>
                <a href=""><img src={exp} alt="express" /></a>
                <a href=""><img src={paypal} alt="paypal" /></a>
            </div>
            <div className="security">
                <img src={sec} alt="lock" />
                <p>Secure online payment</p>
            </div>
        </div>
        <div className="lefts ff">
            <h2>BEST EXPERIENCE</h2>
            <div className="nv">
                <p>FAQ</p>
                <p>Shipment</p>
                <p>Returns</p>
                <p>Gift Cards</p>
                <p>Policies</p>
            </div>
        </div>
        <div className="lefts">
            <h2>COMPANY</h2>
            <div>
                <p>About</p>
                <p>Press</p>
                <p>Offices</p>
                <p>Affiliates</p>
                <p>Giveaway</p>
            </div>
        </div>
        </div>
        
        <div className="f-last">Copyright © 2018 JevelinTheme - Theme by Shufflehound</div>
    </div>);
}

export default Footer;