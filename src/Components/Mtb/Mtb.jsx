import "./Mtb.scss"
import imgMtb from "../../assets/imgFondoMtb.png"
import logo from "../../assets/logoRojo.png"
import ImgViewMtb from "../ImgView/ImgViewMtb"
import imgFondo from "../../assets/4.jpg"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import data from "../../assets/json/datosmountain.json"
import Menu from "../Header/Menu"
import { flags, medals } from "../Constant/Constants"

const Mtb = () => {

    const { t } = useTranslation()
    

    return (
        <div className="animation">
            <Menu />
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
                {data.racesByYear.map((raceByYear) => (
                    <div>
                        <h3>{raceByYear.date}</h3>
                        {raceByYear.races.map((race) => {
                            const actualFlag = flags().find((img) => img.key === race.flag);
                            const actualMedal = medals() [race.position - 1];
                            return (
                                <div>
                                    <div className="flexMedalMtb">
                                        <div className="flexMedalFlag">
                                            <img src={actualFlag && actualFlag.value} className="flafWidth" alt="" />
                                            {actualMedal && <img src={actualMedal} className="medalla"  alt="" />} 
                                        </div>
                                        <p> {race.position} {race.name}</p>
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
            <ImgViewMtb />
        </div>
    )
}

export default Mtb