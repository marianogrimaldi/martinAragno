import "./Mtb.scss"
import imgMtb from "../../assets/imgFondoMtb.png"
import logo from "../../assets/logoRojo.png"
import flagArg from "../../assets/flagArg.png"
import ImgViewMtb from "../ImgView/ImgViewMtb"
import imgFondo from "../../assets/4.jpg"
import medallaPlata from "../../assets/medalla2.png"

import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Mtb = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
                <Menu/>
                <img src={imgMtb} className="imgMtb" alt="" />
                <div className="flexCardMtb">
                    <h1>M T B</h1>
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p>
                </div>
                <div className="flexLogoCardMtb">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div className="mtbFlex">
                    <h2 className="titleMtb">{t("Generales.resultados")}</h2>
                     <p className="hash">{t("Generales.hash")}</p>
                </div>
                <img src={imgFondo} className="logoFondo" alt="" />
                <div className="pMtb"> 
                    <h3>2023</h3>
                        <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        <p>16° XCM 120KM Campeonato Nacional (La Falda - Córdoba, Argentina)</p>
                    </div>
                    <h3>2022</h3>
                        <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        <p>Finisher Vuelta Altas Cumbres 120km (Mina Clavero - Córdoba, Argentina)</p>
                    </div>
                    <h3>2021</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>Desafio Valle del Río Pinto 85km (La Cumbre - Córdoba, Argentina) </p>
                    </div>
                    <p className="pb">P. B. T 3h:47'</p>
                    <h3>2020</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>Finisher Vuelta Altas Cumbres 120km (Mina Clavero - Córdoba, Argentina)</p>
                    </div>
                    <h3>2019</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={medallaPlata} className="medalla" alt="" />
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>2° Desafio Ushuaia Extremo 2 etapas (Ushuaia, Argentina)</p>
                    </div>
                    <h3>2011</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>29 °Tour de la Patagonia 200km 3 etapas (San Martín de los Andes - Neuquen, Argentina)</p>
                    </div>
                    <h3>2010</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>Finisher Desafio Valle del Río Pinto 82km (La Cumbre - Córdoba, Argentina)</p>
                    </div>
                    <h3>2009</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>15° 2500 Extremo (Tafi del Valle - Tucumán, Argentina)</p> 
                    </div>                  
                    <h3>2008</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>Finisher Desafio Valle del Río Pinto 75km (La Cumbre - Córdoba, Argentina)</p>
                    </div>
                    <h3>2007</h3>
                    <div className="flexMedalMtb">
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                    <p>Finisher Desafio al Valle del Río Pinto 75km (La Cumbre - Córdoba, Argentina)</p>
                    </div>
                </div>
                <ImgViewMtb/>
        </div>
    )
}

export default Mtb