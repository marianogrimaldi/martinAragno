import Triatlon from "../Triatlon/Triatlon"
import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
    return(

        <div >
            <ul className="navFlex">
                <Link to="/" ><li >HOME</li></Link>
                <Link to="/triatlon" ><li>TRIATHLON</li></Link> 
                <Link to="/taur" ><li>TRIAL & RUNNING</li></Link>
                <Link to="/mtb" ><li>MTB</li></Link>
                <Link to="/mountain" ><li>MOUNTAIN SUMMIT</li></Link>
                <Link to="/calendario" ><li>CALENDARIO 2023</li></Link>
                <Link to="/sponsors" ><li>SPONSORS</li></Link>
                <Link to="/meraki" ><li>PROYECTO MERAKI</li></Link>
                <a href="#footer"><li>CONTACTO</li></a>  
            </ul>
           
        </div>

    )
}

export default Header