import Triatlon from "../Triatlon/Triatlon"
import "./Header.scss"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logoRojo.png"
import Traductor from "../TraductorSelect/Traductor"
import { useTranslation } from "react-i18next"


const Header = () => {

    const { t } = useTranslation()

    return (

        <div >
            <div className="navFlex">
                    <NavLink to="/" ><li >HOME</li></NavLink>
                    <NavLink to="/triatlon" ><li>TRIATHLON</li></NavLink>
                    <NavLink to="/mtb" ><li>MOUNTAIN BIKE</li></NavLink>
                    <NavLink to="/taur" ><li>TRAIL & RUNNING</li></NavLink>
                    <NavLink to="/mountain" ><li>MOUNTAIN SUMMIT</li></NavLink>
                    <NavLink to="/calendario" ><li>{t("Header.calendario")}</li></NavLink>
                    <NavLink to="/sponsors" ><li>SPONSORS</li></NavLink>
                    <NavLink to="/meraki" ><li>MERAKI</li></NavLink>
                    <a href="#footer"><li>{t("Header.contacto")}</li></a>
                </div>
            <Traductor />
            <div className="logoCont">
            <img src={logo} className="logoHeader" alt="" />
            </div>
            
        </div>

    )
}

export default Header