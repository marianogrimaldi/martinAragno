import "./Triatlon.scss"
import imgTri from "../../assets/tri.jpg"
import logo from "../../assets/logoRojo.png"
import medallaOro from "../../assets/medalla1.png"
import medallaPlata from "../../assets/medalla2.png"
import ImgViewTri from "../ImgView/ImgViewTri"
import imgTrifondo from "../../assets/9.jpg"
import imgTrifondo2 from "../../assets/imgTrifondo.jpg"
import imgTrifondo3 from "../../assets/triNadando.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Triatlon = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
                <Menu/>
                <img src={imgTri} className="imgTri" alt="" />
                    <div className="flexCardTri">
                        <h1>TRIATHLON</h1>
                        <h2>MARTÍN ARAGNO</h2>
                        <p >multisport racing</p>
                    </div>
                    <div className="flexLogoCardTri">
                        <img src={logo} className="logo" alt="" />
                    </div>
                
                <div className="triFlex">
                    <h2 className="titleTri">{t("Generales.resultados")} </h2>
                    <p className="hash">{t("Generales.hash")}</p>
                </div> 
                <img src={imgTrifondo} className="logoFondo" alt="" />
                <img src={imgTrifondo2} className="logoFondo2" alt="" />
                <img src={imgTrifondo3} className="logoFondo3" alt="" />

                <div className="pTri">
                <h3>2017</h3>
                <p>98° IM Texas - Circuito Mundial WTC (Campeonato Norteamericano)</p>
                <p>7° Half IM Thougman Series - Rosario, Argnentina</p>
                <h3>2016</h3>
                <p>50° Xterra Wolrd Championship Maui - Hawaii</p>
                <p>6° Half IM - Termas Santiago del Estero (Campeonato Argentino)</p>
                <p>7° San Juan Xterra - Circuito Mundial Xterra (Argentina)</p>
                <h3>2015</h3>
                <p>17° Xterra Ilhabela - Circuito Mundia Xterral (Brasil)</p>
                <p>5° Half IM - Valparaiso 70.3 (Chile)</p>
                <h3>2014</h3>
                <p>Finisher IM Mallorca - Circuito Mundial WTC (España)</p>
                <div className="flexMedaltri">
                    <img src={medallaPlata} className="medalla" alt="" />
                    <p>2° Half IM - Antofagasta 70.3 (Chile)</p>
                </div>
                <p>52° IM Texas - Circuito Mundial WTC (Usa)</p>
                <div className="flexMedaltri">
                    <img src={medallaOro} className="medalla" alt="" />
                    <p>1° Half IM - Tafi del Valle (Tucumán, Argentina)</p>
                </div>
                <h3>2011</h3>
                <p>57° IM Cozumel - Circuito Mundial WTC (Mexico)</p>
                <p>6° Duatlon - Alturas de Punilla (Códoba, Argentina)</p>
                <p>Finisher IM Florianopolis- Circuito Mundial WTC (Brasil) </p>
                
                <h3>2010</h3>
                <p>Finisher IM Frankfurt - Circuito Mundial WTC - Campeonato Europeo (Alemania)</p>
                <p>4° Half IM Santiago del Estero (Santiago del Estero, Argentina)</p>
                <h3>2009</h3>
                <p>30° Campeonato Sudamericano Olimpico (La Paz - Entre Ríos, Argentina)</p>
                <p>80° IM Western Australia - Circuito Mundial WTC (Australia)</p>
                <p>9° Half IM Santa Fe - (Santa Fe, Argentina)</p>
                <p>10° Half IM Rio de Janeiro (Brasil)</p>
                <p>104° IM Florianopolis - Circuito Mundial WTC (Brasil)</p>
                <p>34° Half IM Concordia - Campeonato Argentino (Entre Ríos, Argentina)</p>
                <p>17° Half IM Colonia (Uruguay)</p>
                <h3>2008</h3>
                <p>17° Half IM Punta del Este (Uruguay) </p>
                <p>32° Duathlon Endurance - Hombre de Piedra (Tandil - Bs As, Argentina)</p>
                <p>23° Duathlon Endurance - Lakeman (Chascomus - Bs As, Argentina)</p>
                <h3>2006</h3>
                <p>59° IM South Africa - Circuito Mundial WTC (Port Elizabeth, South Africa)</p>
                <p>9° Duathlon Olimpico -Campeonato Argentino (Colón - Bs As, Argentina)</p>
                <p>9° Triathlon Olimpico s/drafting (Carhue - Bs As, Argentina)</p>
                <h3>2005</h3>
                <p>Finisher IM Florianopilos - Circuito Mundial WTC (Brasil)</p>
                <p>26° Half IM Villa Gesel  (Bs As,Argentina)</p>
                <p>20° Half IM Chajari - Campeonato Argentino (Entre Ríos, Argentina)</p>
                <div className="flexMedaltri">
                    <img src={medallaPlata} className="medalla" alt="" />
                    <p>2° Half IM - Conquistadores del Sur (Concepicón, Tucuman) </p>
                </div>
                <h3>2004</h3>
                <div className="flexMedaltri">
                    <img src={medallaOro} className="medalla" alt="" />
                    <p>1° Triathlon Sprint (Villa Constitucion Argentina)</p>
                </div>
                <p>21° Half IM Villa Gesell (Bs As, Argentina)</p>
                <p>10° Half IM Chajari - Campeonato Argentino (Entre Ríos, Argentina) </p>
                <h3>2003</h3>
                <p>14° Triathlon Olimpico (Santa Fe, Argentina)</p>
                <p>16° Triathlon Olimpico Baradero (Bs As, Argentina)</p>
                <p>41° Half IM Mar del Plata (Bs As, Argentina) </p>
                <h3>2002 - 2001</h3>
                <p>4° Campeonato Entrerriano Sprint (Entre Ríos, Argentina) </p>
                <div className="flexMedaltri">
                    <img src={medallaOro} className="medalla" alt="" />
                    <p>1° Duathlon Short Felicia - Campeonato Santafesino (Santa Fe, Argentina)</p>
                    </div>
                <div className="flexMedaltri">
                    <img src={medallaOro} className="medalla" alt="" />
                    <p>1° Duathlon Short Progreso - Campeonato Santafesino (Santa Fe, Argentina)</p>
                </div>
                </div>
                <ImgViewTri/>
        </div>
    )
}

export default Triatlon