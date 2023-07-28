import "./Footer.scss"
import logoMarian from "../../assets/logoMarian.png"
import logo from "../../assets/logo.png"
import logoW from "../../assets/wppLogo.png"
import logoI from "../../assets/instLogo.png"
import logoF from "../../assets/faceLogo.webp"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {

    const { t } = useTranslation()

    return(
        <div className="footerColor"> 
        <div className="principalFooter">
            <div className="footer" id="footer">
                <ul className="navFlexFooter">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/triatlon"><li>TRIATLON</li></Link> 
                <Link to="/mtb"><li>MOUNTAIN BIKE</li></Link>
                <Link to="/taur"><li>TRIAL RUNNING</li></Link>
                <Link to="/mountain"><li>MOUNTAIN SUMMIT</li></Link>
                <Link to="/calendario" ><li>{t("Footer.calendario")}</li></Link>
                <Link to="/sponsors"><li>SPONSORS</li></Link>  
                <Link to="/meraki"><li>MERAKI</li></Link>
                </ul>
            </div>
            <div className="martinAndMarian">
                <div className="datosMartin">
                    <div className="nameLogo">
                    <h2>MARTIN</h2>
                    <img src={logo} className="logoMartin" alt="" />
                    <h2>ARAGNO</h2>
                    </div>
                    <p>multisport racing</p>
                </div>
                <div className="marian">
                    <img src={logoMarian} className="logoMarian" alt="" />
                    <p>to.the.top - WEB DEVELOPMENT by MARIANO GRIMALDI</p>
                </div>
            </div>
            <div className="contacto"> 
                <h1>{t("Footer.contacto")}</h1>
                <p>CEL: +54 9 3406 644854 </p>
                <div className="redes"> 
                <a href="https://api.whatsapp.com/send?phone=5493406644854" target="blank"><img src={logoW} alt="" /></a>
                <a href="https://www.instagram.com/aragnomartin/" target="blank"><img src={logoI} alt="" /></a>
                <a href="https://www.facebook.com/martin.aragno" target="blank"><img src={logoF} alt="" /></a>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Footer