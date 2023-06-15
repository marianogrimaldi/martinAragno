import "./Calendario.scss"
import imgCal from "../../assets/calendario.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"

const Calendario = () => {
    return(
        <div className="animation">
                <img src={imgCal} className="imgCal" alt="" />
                <div className="flexCardCal">
                    <h1>CALENDARIO 2023</h1>
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p>
                    <img src={logo} className="logo" alt="" />
                </div>
                <div>
                    <Spon/>
                </div>
        </div>
    )
}

    export default Calendario