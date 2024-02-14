import "./Taur.scss"
import imgTaur from "../../assets/trail.jpg"
import logo from "../../assets/logoRojo.png"
import flagArg from "../../assets/flagArg.png"
import flagPar from "../../assets/flagPar.webp"
import ImgViewTrail from "../ImgView/ImgViewTrail";
import imgJump from "../../assets/imgJump.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu";
import medallaOro from "../../assets/medalla1.png"
import medallaBronce from "../../assets/medalla3.png"
import medallaPlata from "../../assets/medalla2.png"
import data from "../../../datostrail.json"
import { NavLink } from "react-router-dom"
import { flags, medals } from "../Constant/Constants"
const Taur = () => {

    const { t } = useTranslation()


    return (
        <div className="animation">
            <Menu />
            <img src={imgTaur} className="imgTaur" alt="" />

            <div className="flexCardTriTaur">
                <h1>TRAIL & RUNNING</h1>
                <h2>MARTÍN ARAGNO</h2>
                <p >multisport racing</p>
            </div>
            <div className="flexLogoCardTaur">
                <img src={logo} className="logo" alt="" />
            </div>

            <div className="trialFlex">
                <h2 className="titleTrial">{t("Generales.resultados")}</h2>
                <p className="hash">{t("Generales.hash")}</p>
            </div>
            <img src={imgJump} className="imgJump" alt="" />
            
            <div className="ptrial">
            {data.racesByYear.map((raceByYear) => (
                    <div>
                        <h3>{raceByYear.date}</h3>
                        {raceByYear.races.map((race) => {
                            const actualFlag = flags().find((img) => img.key === race.flag);
                            const actualMedal = medals() [race.position - 1];
                            return (
                                <div>
                                    <div className="flexMedal">
                                        
                                        <p> {race.position} {race.name}</p>
                                        <div className="flexMedalFlag">
                                            <img src={actualFlag && actualFlag.value} className="flafWidth" alt="" />
                                           {actualMedal && <img src={actualMedal} className="medalla"  alt="" />} 
                                        </div>
                                    </div>
                                    <p className="pb">{race.time}</p>
                                </div>
                            )
                        })}
                    </div>
                ))}
               

            </div>

            <div className="flexBtnR">
                <NavLink to="/otros" ><button>OTROS RESULTADOS</button></NavLink>
            </div>

            <ImgViewTrail />
        </div>
    )
}

export default Taur