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
                    <h3>{t("Calendario.febrero")}</h3>
                    <p>Chivas trail 12km </p>
                    <h3>{t("Calendario.marzo")}</h3>
                    <p>Fuegoyagua ( circuito Latinoamaricano trail - Nicaragua ) 50km ultra trail </p>
                    <p>Las vallas Sky running 35km Belen Catamarca </p>
                    <h3>{t("Calendario.mayo")}</h3>
                    <p>Valhoil UTMB series mundiales 35km ( V Gral Belgrano )</p>
                    <h3>{t("Calendario.junio")}</h3>
                    <p>Running trip San Lorenzo Salta 30km</p>
                    <h3>{t("Calendario.agosto")}</h3>
                    <p>Quito UTMB series mundiales Ecuador 47km </p>
                    <p>Andes Race Peru ( Circuito Latinoamericano trail ) 50km </p>
                    <h3>{t("Calendario.diciembre")}</h3>
                    <p>42km Maraton de Valencia calle España</p>
                   </div>
                </div>
        </div>
    )
}

    export default Calendario