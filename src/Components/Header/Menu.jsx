import menu from "../../assets/menu.png"
import "./Header.scss"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
const Menu = () => {

    const { t } = useTranslation()

    return (
        <div>
             <ul >
                <label htmlFor="menu" className="nav__label">
                    <img src={menu} alt="" className="nav__img" />
                </label>
                <input type="checkbox" id="menu" className="nav__imput" />
                <div className="navFlex">
                    <NavLink to="/" ><li >HOME</li></NavLink>
                    <NavLink to="/triatlon" ><li>TRIATHLON</li></NavLink>
                    <NavLink to="/mtb" ><li>MOUNTAIN BIKE</li></NavLink>
                    <NavLink to="/taur" ><li>TRIAL RUNNING</li></NavLink>
                    <NavLink to="/mountain" ><li>MOUNTAIN SUMMIT</li></NavLink>
                    <NavLink to="/calendario" ><li>{t("Header.calendario")}</li></NavLink>
                    <NavLink to="/sponsors" ><li>SPONSORS</li></NavLink>
                    <NavLink to="/meraki" ><li>MERAKI</li></NavLink>
                    <a href="#footer"><li>{t("Header.contacto")}</li></a>
                </div>
            </ul>
          
        </div>
    )
}

export default Menu