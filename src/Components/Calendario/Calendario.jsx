import "./Calendario.scss"
import imgCal from "../../assets/calendario.jpg"
import logo from "../../assets/logoRojo.png"

import corriendo from "../../assets/corriendo.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"


const Calendario = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
            <Menu/>
                <img src={imgCal} className="imgCal" alt="" />
                <div className="flexCardCal">
                    <h1>{t("Calendario.titulo")}</h1>
                  
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p>
                </div>
                <div className="flexLogoCardCal">
                    <img src={logo} className="logo" alt="" />
                </div>
              
                <div>
                    <div className="calFlex" >
                        <h2 className="titleCal">{t("Calendario.titulo")} 2024</h2>
                        <p className="hash">{t("Generales.hash")}</p>
                    </div>
                    <img src={corriendo} className="logoFondoCal" alt="" />    
                    <div className="pCal">
                    <h3 className="calConst">{t("Calendario.frase")}</h3>
                   </div>
                </div>
        </div>
    )
}

    export default Calendario