import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";

const ImgViewTrail = () => {

    let imagenes = [
        "/trail/10.jfif",
        "/trail/1.jfif",
        "/trail/2.jfif",
        "/trail/7.jfif",
        "/trail/8.jfif",
        "/trail/9.jfif",
        "/trail/6.jfif",
        "/trail/3.jfif",
        "/trail/4.jfif",
        "/trail/5.jfif",
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

export default ImgViewTrail

