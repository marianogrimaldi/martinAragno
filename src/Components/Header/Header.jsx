import Triatlon from "../Triatlon/Triatlon"
import "./Header.scss"
import { NavLink } from "react-router-dom"
import menu from "../../assets/menu.png"

const Header = () => {
    return(

        <div >
            <ul >
                <label htmlFor="menu" className="nav__label">
                    <img src={menu} alt="" className="nav__img"/>
                </label>
                <input type="checkbox" id="menu" className="nav__imput"/>
                <div className="navFlex">
                <NavLink to="/" ><li >HOME</li></NavLink>
                <NavLink to="/triatlon" ><li>TRIATHLON</li></NavLink> 
                <NavLink to="/mtb" ><li>MOUNTAIN BIKE</li></NavLink>
                <NavLink to="/taur" ><li>TRIAL RUNNING</li></NavLink>
                <NavLink to="/mountain" ><li>MOUNTAIN SUMMIT</li></NavLink>
                <NavLink to="/calendario" ><li>CALENDARIO</li></NavLink>
                <NavLink to="/sponsors" ><li>SPONSORS</li></NavLink>
                <NavLink to="/meraki" ><li>MERAKI</li></NavLink>
                <a href="#footer"><li>CONTACTO</li></a>
                </div> 
            </ul>
           
        </div>

    )
}

export default Header