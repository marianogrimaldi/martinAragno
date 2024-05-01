import "./Triatlon.scss"
import imgTri from "../../assets/tri.jpg"
import logo from "../../assets/logoRojo.png"
import { flags, medals } from "../Constant/Constants"
import ImgViewTri from "../ImgView/ImgViewTri"
import imgTrifondo from "../../assets/9.jpg"
import imgTrifondo2 from "../../assets/imgTrifondo.jpg"
import imgTrifondo3 from "../../assets/triNadando.jpg"
import data from "../../assets/json/datostriathlon.json"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Triatlon = () => {

    const { t } = useTranslation();

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
                {data.racesByYear.map((raceByYear) => (
                    <div>
                        <h3>{raceByYear.date}</h3>
                        {raceByYear.races.map((race) => {
                            const actualFlag = flags().find((img) => img.key === race.flag);
                            const actualMedal = medals() [race.position - 1];
                            return (
                                <div className="flexMedaltri">
                                    <div className="flexMedalFlag">
                                        <img src={actualFlag && actualFlag.value} className="flafWidth" alt="" />
                                        {actualMedal && <img src={actualMedal} className="medalla"  alt="" />} 
                                    </div>
                                    <p> {race.position} {race.name}</p>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className="flexBtnR">
                <NavLink to="/otros" ><button>OTROS RESULTADOS</button></NavLink>
            </div>
            <ImgViewTri />
        </div>
    )
}

export default Triatlon