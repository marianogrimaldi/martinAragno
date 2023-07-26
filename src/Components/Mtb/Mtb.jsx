import "./Mtb.scss"
import imgMtb from "../../assets/mtb.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import ImgViewMtb from "../ImgView/ImgViewMtb"
import imgFondo from "../../assets/4.jpg"
import { useTranslation } from "react-i18next"

const Mtb = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
                <img src={imgMtb} className="imgMtb" alt="" />
                <div className="flexCardMtb">
                    <h1>M T B</h1>
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p>
                </div>
                <div className="flexLogoCard">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div>
                    <Spon/>
                </div>
                <div className="mtbFlex">
                    <h2 className="titleMtb">{t("Generales.resultados")}</h2>
                     <p className="hash">{t("Generales.hash")}</p>
                </div>
                <img src={imgFondo} className="logoFondo" alt="" />
                <div className="pMtb"> 
                    <h3>2022</h3>
                    <p>Finisher Vuelta a las Altas Cumbres 120km Mina Clavero Córdoba</p>
                    <h3>2021</h3>
                    <p>Desafio al Valle del Río Pinto 85km La Cumbre Córdoba.... T 3h:47</p>
                    <h3>2020</h3>
                    <p>Finisher Vuelta a las Altas Cumbres 120km Mina Clavero Córdoba</p> 
                    <h3>2019</h3>
                    <p>Desafio Ushuaia Extremo... 2° puesto (2 etapas)</p>
                    <h3>2011</h3>
                    <p>Tour de la Patagonia 200km (3 etapas) San Martín de los Andes Argentina.... 29° puesto</p>
                    <h3>2010</h3>
                    <p>Desafio al Valle del Río Pinto 82km La Cumbre Córdoba.... T 4h 09</p>
                    <h3>2009</h3>
                    <p>2500 Extremo Tafi del Valle Tucumán Argentina.... 15° puesto</p>                   
                    <h3>2008</h3>
                    <p>Desafio al Valle del Río Pinto 75km La Cumbre Córdoba T 4h16</p>
                    <h3>2007</h3>
                    <p>Desafio al Valle del Río Pinto 75km La Cumbre Córdoba T 3h:58</p>
                </div>
                <ImgViewMtb/>
        </div>
    )
}

export default Mtb