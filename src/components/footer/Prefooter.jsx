import { PrefooterSize } from "../../styled/Container";
import Youtube from "../../images/youtube.svg"
import Facebook from "../../images/facebook.svg"
import tg from "../../images/telegram.svg"
import instagram from "../../images/instagram (1).svg"
const Prefooter = () => {
    return ( 
        <PrefooterSize>
            <img src={Youtube} alt="Youtube" />
            <a href="https://t.me/Abdukhamidov99">
            <img src={tg} alt="tg" />
            </a>
            <a href="https://www.facebook.com/abdubannob.abduhamidov.1">
            <img src={Facebook} alt="Facebook" />
            </a>
            <img src={instagram} alt="instagram" />
        </PrefooterSize>
     );
}
 
export default Prefooter;