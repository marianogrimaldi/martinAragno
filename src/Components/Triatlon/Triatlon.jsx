import "./Triatlon.scss"
import imgTri from "../../assets/tri.jpg"
import logo from "../../assets/logoRojo.png"
import flagArg from "../../assets/flagArg.png"
import flagBra from "../../assets/flagBra.jpg"
import flagUsa from "../../assets/flagUsa.webp"
import flagHaw from "../../assets/flagHaw.png"
import flagChi from "../../assets/flagChi.png"
import flagEsp from "../../assets/esp.png"
import flagMex from "../../assets/flagMex.png"
import flagAle from "../../assets/ale.png"
import flagUru from "../../assets/flagUru.png"
import flagAus from "../../assets/flagAus.png"
import flagSud from "../../assets/flagSud.png"
import medallaOro from "../../assets/medalla1.png"
import medallaPlata from "../../assets/medalla2.png"
import ImgViewTri from "../ImgView/ImgViewTri"
import imgTrifondo from "../../assets/9.jpg"
import imgTrifondo2 from "../../assets/imgTrifondo.jpg"
import imgTrifondo3 from "../../assets/triNadando.jpg"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Triatlon = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu />

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
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagUsa} className="flafWidth" alt="" />
                    </div>
                    <p>98° IM Texas - Circuito Mundial WTC (Campeonato Norteamericano)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>7° Half IM Thougman Series - Rosario, Argentina</p>
                </div>
                <h3>2016</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagHaw} className="flafWidth" alt="" />
                    </div>
                    <p>50° Xterra Wolrd Championship Maui - Hawaii</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>6° Half IM - Termas Santiago del Estero (Campeonato Argentino)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>7° San Juan Xterra - Circuito Mundial Xterra (Argentina)</p>
                </div>
                <h3>2015</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagBra} className="flafWidth" alt="" />
                    </div>
                    <p>17° Xterra Ilhabela - Circuito Mundia Xterral (Brasil)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagChi} className="flafWidth" alt="" />
                    </div>
                    <p>5° Half IM - Valparaiso 70.3 (Chile)</p>
                </div>
                <h3>2014</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagEsp} className="flafWidth" alt="" />
                    </div>
                    <p>Finisher IM Mallorca - Circuito Mundial WTC (España)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaPlata} className="medalla" alt="" />
                        <img src={flagChi} className="flafWidth" alt="" />
                    </div>
                    <p>2° Half IM - Antofagasta 70.3 (Chile)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagUsa} className="flafWidth" alt="" />
                    </div>
                    <p>52° IM Texas - Circuito Mundial WTC (Usa)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaOro} className="medalla" alt="" />
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>1° Half IM - Tafi del Valle (Tucumán, Argentina)</p>
                </div>
                <h3>2011</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagMex} className="flafWidth" alt="" />
                    </div>
                    <p>57° IM Cozumel - Circuito Mundial WTC (Mexico)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>6° Duatlon - Alturas de Punilla (Códoba, Argentina)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagBra} className="flafWidth" alt="" />
                    </div>
                    <p>Finisher IM Florianopolis- Circuito Mundial WTC (Brasil) </p>
                </div>
                <h3>2010</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagAle} className="flafWidth" alt="" />
                    </div>
                    <p>Finisher IM Frankfurt - Circuito Mundial WTC - Campeonato Europeo (Alemania)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>4° Half IM Santiago del Estero (Santiago del Estero, Argentina)</p>
                </div>
                <h3>2009</h3>
                
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagAus} className="flafWidth" alt="" />
                    </div>
                    <p>80° IM Western Australia - Circuito Mundial WTC (Australia)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>9° Half IM Santa Fe - (Santa Fe, Argentina)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagBra} className="flafWidth" alt="" />
                    </div>
                    <p>10° Half IM Rio de Janeiro (Brasil)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagBra} className="flafWidth" alt="" />
                    </div>
                    <p>104° IM Florianopolis - Circuito Mundial WTC (Brasil)</p>
                </div>
                
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagUru} className="flafWidth" alt="" />
                    </div>
                    <p>17° Half IM Colonia (Uruguay)</p>
                </div>
                <h3>2008</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagUru} className="flafWidth" alt="" />
                    </div>
                    <p>17° Half IM Punta del Este (Uruguay) </p>
                </div>
               
               
                <h3>2006</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagSud} className="flafWidth" alt="" />
                    </div>
                    <p>59° IM South Africa - Circuito Mundial WTC (Port Elizabeth, South Africa)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>9° Duathlon Olimpico -Campeonato Argentino (Colón - Bs As, Argentina)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>9° Triathlon Olimpico s/drafting (Carhue - Bs As, Argentina)</p>
                </div>
                <h3>2005</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagBra} className="flafWidth" alt="" />
                    </div>
                    <p>Finisher IM Florianopilos - Circuito Mundial WTC (Brasil)</p>
                </div>
               
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaPlata} className="medalla" alt="" />
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>2° Half IM - Conquistadores del Sur (Concepicón - Tucuman, Argentina) </p>
                </div>
                <h3>2004</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaOro} className="medalla" alt="" />
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>1° Triathlon Sprint (Villa Constitucion Argentina)</p>
                </div>
                
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>10° Half IM Chajari - Campeonato Argentino (Entre Ríos, Argentina) </p>
                </div>
                <h3>2003</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>14° Triathlon Olimpico (Santa Fe, Argentina)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>16° Triathlon Olimpico Baradero (Bs As, Argentina)</p>
                </div>
                
                <h3>2002 - 2001</h3>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">

                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>4° Campeonato Entrerriano Sprint (Entre Ríos, Argentina) </p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaOro} className="medalla" alt="" />
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>1° Duathlon Short Felicia - Campeonato Santafesino (Santa Fe, Argentina)</p>
                </div>
                <div className="flexMedaltri">
                    <div className="flexMedalFlag">
                        <img src={medallaOro} className="medalla" alt="" />
                        <img src={flagArg} className="flafWidth" alt="" />
                    </div>
                    <p>1° Duathlon Short Progreso - Campeonato Santafesino (Santa Fe, Argentina)</p>
                </div>
            </div>
            <div className="flexBtnR">
                <NavLink to="/otros" ><button>OTROS RESULTADOS</button></NavLink>
            </div>
            <ImgViewTri />
        </div>
    )
}

export default Triatlon