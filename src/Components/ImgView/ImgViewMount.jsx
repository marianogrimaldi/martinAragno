import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";


const ImgViewMount = () => {

    let imagenes = [
        "/mont/1.jpg",
        "/mont/2.jpg",
        "/mont/3.jpg",
        "/mont/4.jpg",
        "/mont/5.jpg",
        "/mont/6.jpg",
        "/mont/7.jfif",
        "/mont/8.jfif",
        "/mont/9.jfif",
        "/mont/10.jpg",
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

export default ImgViewMount