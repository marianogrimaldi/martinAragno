import "./Mountain.scss"
import imgMont from "../../assets/mountain.jpg"
import logo from "../../assets/logoRojo.png"
import flagArg from "../../assets/flagArg.png"
import flagChi from "../../assets/flagChi.png"
import flagEsp from "../../assets/esp.png"
import flagPeru from "../../assets/flagPeru.png"
import flagNic from "../../assets/flagNic.webp"
import ImgViewMount from "../ImgView/ImgViewMount";
import imgfondo from "../../assets/imagenFondo.jpeg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu";

const Mountain = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu />
            <img src={imgMont} className="imgMont" alt="" />
            <div className="flexCardMount">
                <h1 >MOUNTAIN</h1>
                <h2 >MARTÍN ARAGNO</h2>
                <p >multisport racing</p>
            </div>
            <div className="flexLogoCardMount">
                <img src={logo} className="logo" alt="" />
            </div>


            <div className="mountFlex">
                <h2 className="titleMount">{t("Mountain.cumbres")} </h2>
                <p className="hash">{t("Generales.hash")}</p>
            </div>
            <img src={imgfondo} className="logoFondo" alt="" />
            <div className="pMount">
            <div className="flexFlagMount">
                    <img src={flagPeru} className="flagMount" alt="" />
                    <h3>PERU</h3>
                </div>
                <a href="" target="blank"><p>Cerro Ipsaijasa - 4500 msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagNic} className="flagMount" alt="" />
                    <h3>NICARAGUA</h3>
                </div>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Maderas" target="blank"><p>Volcan Madera - Ometepe - 1320msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagEsp} className="flagMount" alt="" />
                    <h3>ESPAÑA</h3>
                </div>
                <a href="https://es.wikipedia.org/wiki/Monte_Perdido" target="blank"><p>Pirineos Aragonés - Cerro Monte Perdido altitud 3355 msnm</p></a>
                <a href="https://es.wikipedia.org/wiki/Puig_Campana" target="blank"><p>Alicante - Cerro Puig Campana altitud 1406 msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagChi} className="flagMount" alt="" />
                    <h3>CHILE</h3>
                </div>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_L%C3%A1scar" target="blank"><p>Atacama - Volcan Lascar (activo) altitud 5592 msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagArg} className="flagMount" alt="" />
                    <h3>CORDOBA - ARGENINA</h3>
                </div>
                <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-el-mojon/" target="blank"><p>Cerro El Mojon x 2 altitud 1290 msnm </p></a>
                <a href="https://www.turismolafalda.gob.ar/circuitoTuristicoDetalle/CerroLaBanderita" target="blank"><p>Cerro La Banderita x 10 altitud 1450 msnm </p></a>
                <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-pan-de-azucar-un-clasico-de-las-sierras-chicas/" target="blank"><p>Cerro Pan de Azucar x 2 altitud 1260 msnm </p></a>
                <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-uritorco/" target="blank"><p>Cerro Uritorco x 2 altitud 1979 msnm </p></a>
                <a href="https://www.cordobaturismo.gov.ar/experiencia/macizo-los-gigantes/" target="blank"><p>Cerro Los Gigantes altitud 2370 msnm</p></a>
                <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-champaqui/" target="blank"><p>Cerro Champaqui x 2 altitud 2790 msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagArg} className="flagMount" alt="" />
                    <h3>CATAMARCA - ARGENTINA</h3>
                </div>
                <a href="https://www.wikiexplora.com/Cerro_Pastos_Largos" target="blank"><p>Cerro Pastos Largos altitud 4120 msnm </p></a>
                <a href="https://www.wikiexplora.com/Cerro_Falso_Morocho" target="blank"><p>Cerro Falso Morocho altitud 4478 msnm</p></a>
                <div className="flexFlagMount">
                    <img src={flagArg} className="flagMount" alt="" />
                    <h3>NEUQUEN - ARGENTINA</h3>
                </div>
                <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Lan%C3%ADn" target="blank"><p>Volcan Lanín altitud 3776 msnm </p></a>
                <div className="flexFlagMount">
                    <img src={flagArg} className="flagMount" alt="" />
                    <h3>SALTA - ARGENTINA</h3>
                </div>
                <a href="https://www.minube.com.ar/rincon/cerro-negro--a3674338" target="blank"><p>Cerro Negro altitud 5012 msnm </p></a>
            </div>
            <ImgViewMount />
        </div>
    )
}

export default Mountain