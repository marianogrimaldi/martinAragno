import "./Calendario.scss"
import imgCal from "../../assets/calendario.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
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
                <div className="flexLogoCard">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div>
                    <Spon/>
                </div>
                <div>
                    <div className="calFlex" >
                        <h2 className="titleCal">{t("Calendario.titulo")} 2023</h2>
                        <p className="hash">#SÉTUMÁXIMO</p>
                    </div>
                    <img src={corriendo} className="logoFondoCal" alt="" />    
                    <div className="pCal">
                    <h3>{t("Calendario.julio")}</h3>
                    <p>9/7 Trail running 12km Valle fertil San Juan</p>
                    <h3>{t("Calendario.agosto")}</h3>
                    <p>27/08 21km Media de Bs As</p>
                    <h3>{t("Calendario.septiembre")}</h3>
                    <p>3/9 Trail Running King Paraguay</p>
                    <p>19/9 MTB XCM 120km La Falda Campeonato Argentino</p>
                    <p>23/9 Half Termas tentativo -invitado-</p>
                    <h3>{t("Calendario.octubre")}</h3>
                    <p>29/10 70.3 Bs As</p>
                    <h3>{t("Calendario.noviembre")}</h3>
                    <p>4/11 Trail Running King Paraguay</p>
                   </div>
                </div>
        </div>
    )
}

    export default Calendario