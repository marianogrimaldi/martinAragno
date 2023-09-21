import "./Home.scss"
import imgHome from "../../assets/homePic.jpg"
import imgHistory from "../../assets/imgHistory.jpg"
import imgHistoryCel from "../../assets/imgHistoryCel.jpg"
import logo from "../../assets/logoRojo.png"
import imgSponsors from "../../assets/imgSponsors.jpg"
import corteFoor from "../../assets/corteFooter.jpg"
import sp1 from "../../assets/sponsors/1.png"
import sp2 from "../../assets/sponsors/naka.png"
import sp3 from "../../assets/sponsors/7.jpg"
import sp4 from "../../assets/sponsors/10.png"
import sp5 from "../../assets/sponsors/4.png"
import sp6 from "../../assets/sponsors/11.png"
import sp7 from "../../assets/sponsors/8.webp"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp10 from "../../assets/sponsors/5.jpg"
import sp11 from "../../assets/sponsors/226ers.png"
import sp12 from "../../assets/sponsors/gu.png"
import sp13 from "../../assets/sponsors/quality.png"
import sp14 from "../../assets/sponsors/foot.png"
import sp15 from "../../assets/sponsors/xterra.png"
import sp16 from "../../assets/sponsors/modofit.png"
import sp17 from "../../assets/sponsors/xpert.webp"
import sp18 from "../../assets/sponsors/running.png"
import sp19 from "../../assets/sponsors/indusP.png"
import sp20 from "../../assets/sponsors/cabritos.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Home = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">

            <Menu/>
            <div className="flexTitle">
                <h2 className="title">MARTÍN</h2>
                <img src={logo} className="logoPrincipal" alt="" />
                <h2 className="title"> ARAGNO</h2>
            </div>
            <h3 className="subTitle">multisport racing</h3>
            <div className="flexHome">
                <img src={imgHome} className="imgPrincipal" alt="" />
                <div className="datos">
                    <h1 className="frase">{t("Home.frase")}</h1>
                    <h2 className="firma">Martín Aragno</h2>
                    <p>{t("Home.datos1")} 12 - 06 - 1972 || San Jorge</p>
                    <p>{t("Home.datos2")} San jorge || Villa Giardino </p>
                    <p>{t("Home.datos3")} Multisport</p>
                    <p>{t("Home.datos4")} Ezk Team</p>
                    <p>{t("Home.datos5")} Ezequiel Morales</p>
                    <p> {t("Home.datos6")} </p>
                    <p> {t("Home.datos7")} 1,77cm</p>
                    <p> {t("Home.datos8")} 78kg </p>
                    <p> {t("Home.datos9")} 43 </p>
                    <p>{t("Home.datos10")} 12% </p>
                    <p> {t("Home.datos11")} </p>
                </div>
            </div>

            <h1 className="titleHistory">{t("Home.titulo1")}</h1>
            <img src={imgHistoryCel} className="imgHistoryCel" alt="" />
            <img src={imgHistory} className="imgHistory" alt="" />
            <p className="textHistory">{t("Home.textoHis")}</p>
            <h2 className="firma2">Martín Aragno</h2>
            <p className="hashtag">{t("Generales.hash")}</p>
            <h2 className="tittleSponsor">{t("Home.titulo2")}</h2>
            <img src={imgSponsors} className="imgSponsors" alt="" />
            <div className="sponsorsGrid">
                <div ></div>

                <img src={sp3} alt="" />
                <img src={sp4} className="scott" alt="" />
                <img src={sp7} className="lasp" alt="" />
                <img src={sp9} className="casj" alt="" />
                <div></div>
                <img src={sp5} alt="" />
                <img src={sp6} alt="" />
                <img src={sp15} alt="" />
                <img src={sp12} alt="" />
                <div></div>
                <div></div>
                <img src={sp11} alt="" />
                <img src={sp10} className="cera" alt="" />
            </div>
            <div className="sponsorsSecundarios">
                <img src={sp1} alt="" />
                <img src={sp8} alt="" />
                <img src={sp13} alt="" />
                <img src={sp14} alt="" />
                <img src={sp2} className="naka" alt="" />
                <img src={sp16} className="fit" alt="" />
                <img src={sp17} alt="" />
                <img src={sp18} alt="" />
                <img src={sp19} alt="" />
                <img src={sp20} alt="" />
            </div>
            <div className="endHome">
                <img src={corteFoor} className="martinImgBike" alt="" />
                
                    
               
            </div>
        </div>
    )
}

export default Home