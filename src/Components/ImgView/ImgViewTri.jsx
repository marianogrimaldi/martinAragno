import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";


const ImgViewTri = () => {

    let imagenes = [
        "/tri/1.jfif",
        "/tri/2.jfif",
        "/tri/3.jfif",
        "/tri/7.jfif",
        "/tri/5.jfif",
        "/tri/6.jfif",
        "/tri/4.jfif",
        "/tri/8.jfif",
        "/tri/9.jfif",
        "/tri/10.jpg",
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

export default ImgViewTri