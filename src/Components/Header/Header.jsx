import Triatlon from "../Triatlon/Triatlon"
import "./Header.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
    return(

        <div >
            <ul className="navFlex">
                <NavLink to="/" ><li >HOME</li></NavLink>
                <NavLink to="/triatlon" ><li>TRIATHLON</li></NavLink> 
                <NavLink to="/taur" ><li>TRIAL & RUNNING</li></NavLink>
                <NavLink to="/mtb" ><li>MTB</li></NavLink>
                <NavLink to="/mountain" ><li>MOUNTAIN SUMMIT</li></NavLink>
                <NavLink to="/calendario" ><li>CALENDARIO 2023</li></NavLink>
                <NavLink to="/sponsors" ><li>SPONSORS</li></NavLink>
                <NavLink to="/meraki" ><li>PROYECTO MERAKI</li></NavLink>
                <a href="#footer"><li>CONTACTO</li></a>  
            </ul>
           
        </div>

    )
}

export default Header