import "./ImgViewGlobal.scss"
import { RViewer, RViewerTrigger } from "react-viewerjs";
import { useTranslation } from "react-i18next"

const ImgViewMount = () => {
    const { t } = useTranslation()
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
        "/mont/11.jpeg",
        "/mont/12.jpeg",
    ]
    return (
        <div>

            <h1 className="galeryTitle">{t("Generales.galeria")}</h1>
            <RViewer imageUrls={imagenes}>
                <div className="imgGrid">
                    {imagenes.map((imagen, index) => {
                        return (
                            <RViewerTrigger index={index}>
                                <div >
                                    <img src={imagen} alt="Fotos Martin Aragno" />
                                </div>
                            </RViewerTrigger>
                        )
                    })}
                </div>
            </RViewer>
        </div>
    )
}

export default ImgViewMount