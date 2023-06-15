import "./Mtb.scss"
import imgMtb from "../../assets/mtb.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"

const Mtb = () => {
    return(
        <div className="animation">
                <img src={imgMtb} className="imgMtb" alt="" />
                <div className="flexCardMtb">
                    <h1>M T B</h1>
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

export default Mtb