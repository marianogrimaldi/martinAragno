import "./Taur.scss"
import imgTaur from "../../assets/trail.jpg"
import logo from "../../assets/logoRojo.png"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import Spon from "../Sponsors/Sponsors"

const Taur = () => {

    let imagenes = [
        "/trail/10.jfif",
        "/trail/1.jfif",
        "/trail/2.jfif",
       
        "/trail/7.jfif",
        "/trail/8.jfif",
        "/trail/9.jfif",
       
       
    ]

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
        <RViewer imageUrls={imagenes}>
                <div className="imgGridTrail">
                    {imagenes.map((imagen, index)=> {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                     <img src={imagen} alt="" />
                                </div>
                               
                            </RViewerTrigger>
                        )
                    }) }
                </div>
             </RViewer>
</div>
    )
}

export default Taur