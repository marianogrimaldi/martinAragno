import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";


const ImgViewMtb = () => {

    let imagenes = [
        "/mtb/1.jfif",
        "/mtb/2.jfif",
        "/mtb/9.jfif",
        "/mtb/10.jfif",
        "/mtb/4.jfif",
        "/mtb/5.jfif",
        "/mtb/6.jfif",
        "/mtb/7.jfif",
        "/mtb/8.jfif",
        "/mtb/3.jfif",
        "/mtb/8.jfif",
        "/mtb/3.jfif",
       
    ]
    return (
        <div>
             <h1 className="galeryTitle">GALERIA</h1>
            <RViewer imageUrls={imagenes}>
                <div className="imgGrid">
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

export default ImgViewMtb