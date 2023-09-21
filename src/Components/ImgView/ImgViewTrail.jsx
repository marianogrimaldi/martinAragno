import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { useTranslation } from "react-i18next"

const ImgViewTrail = () => {
    const { t } = useTranslation()
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
        "/trail/11.jpeg",
        "/trail/12.jpeg",
      
    ]

    return (
        <div>
             <h1 className="galeryTitle">{t("Generales.galeria")}</h1>
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

