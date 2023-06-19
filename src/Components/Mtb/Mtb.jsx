import "./Mtb.scss"
import imgMtb from "../../assets/mtb.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import { RViewer, RViewerTrigger } from "react-viewerjs";

const Mtb = () => {

    let imagenes = [
        "/mtb/1.jfif",
        "/mtb/2.jfif",
        "/mtb/9.jfif",
        "/mtb/4.jfif",
        "/mtb/5.jfif",
        "/mtb/6.jfif",
        "/mtb/7.jfif",
        "/mtb/8.jfif",
        "/mtb/3.jfif",
        
       
    ]

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
                <RViewer imageUrls={imagenes}>
                <div className="imgGridMtb">
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

export default Mtb