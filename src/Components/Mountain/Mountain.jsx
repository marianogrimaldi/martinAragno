import "./Mountain.scss"
import imgMont from "../../assets/mountain.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"

const Mountain = () => {
    return(
        <div className="animation">
        <img src={imgMont} className="imgMont" alt="" />
        <div className="flexCardMount">
            <h1 >MOUNTAIN</h1>
            <h2 >MARTÍN ARAGNO</h2>
            <p >multisport racing</p>
            <img src={logo} className="logo" alt="" />
        </div>
        <div>
            <Spon/>
        </div>
</div>
    )
}

export default Mountain