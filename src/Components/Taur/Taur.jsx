import "./Taur.scss"
import imgTaur from "../../assets/trail.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import ImgViewTrail from "../ImgView/ImgViewTrail";

const Taur = () => {



    return(
        <div className="animation">
        <img src={imgTaur} className="imgTaur" alt="" />
        <div className="flexCardTriTaur">
            <h1>TRIAL & RUNNING</h1>
            <h2>MARTÍN ARAGNO</h2>
            <p >multisport racing</p>
            <img src={logo} className="logo" alt="" />
        </div>
        <div>
            <Spon/>
        </div>
        <div className="ultraFlex">
                    <h2 className="titleUltra">RESULTADOS DESTACADOS </h2>
                    <p className="hash">#SÉTUMÁXIMO</p>
                </div> 
        <ImgViewTrail/>
</div>
    )
}

export default Taur