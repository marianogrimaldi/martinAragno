import "./Triatlon.scss"
import imgTri from "../../assets/tri.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"

const Triatlon = () => {
    return(
        <div className="animation">
                <img src={imgTri} className="imgTri" alt="" />
                <div className="flexCardTri">
                    <h1>TRIATHLON</h1>
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

export default Triatlon