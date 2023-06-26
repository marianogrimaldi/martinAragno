import "./Meraki.scss"
import meraki from "../../assets/meraki.jpg"
import Spon from "../Sponsors/Sponsors"


const Meraki = () => {
    return(
        <div className="animation">
            <img src={meraki} className="merakiImg" alt="" />
            <h1 className="merakiTitle">MERAKI</h1>
            <h2 className="subt">PRONTO...</h2>
         <Spon/>   
        </div>
        
    )
}

export default Meraki