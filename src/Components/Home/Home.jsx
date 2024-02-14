import "./Home.scss"
import imgHome from "../../assets/homePic.jpg"
import imgHistory from "../../assets/imgHistory.jpg"
import imgHistoryCel from "../../assets/imgHistoryCel.jpg"
import logo from "../../assets/logoRojo.png"
import imgSponsors from "../../assets/imgSponsors.jpg"
import corteFoor from "../../assets/corteFooter.jpg"
import sp1 from "../../assets/sponsors/1.png"
import sp3 from "../../assets/sponsors/7.jpg"
import sp6 from "../../assets/sponsors/11.png"
import sp7 from "../../assets/sponsors/2cumbres.png"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp10 from "../../assets/sponsors/quarq.png"
import sp11 from "../../assets/sponsors/zipp.png"
import sp12 from "../../assets/sponsors/rock.png"
import sp13 from "../../assets/sponsors/quality.png"
import sp14 from "../../assets/sponsors/foot.png"
import sp15 from "../../assets/sponsors/xterra.png"
import sp16 from "../../assets/sponsors/modofit.png"
import sp17 from "../../assets/sponsors/pro.png"
import sp18 from "../../assets/sponsors/running.png"
import sp19 from "../../assets/sponsors/indusP.png"
import sp20 from "../../assets/sponsors/cabritos.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Home = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">

            <Menu />
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
                    <p>{t("Home.datos2")} San Jorge || Villa Giardino </p>
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
                <a href="https://ezkteam.com/"target="_blank"><img src={sp3} alt="" /></a>
                <a href="https://2cumbres.com.ar/" target="_blank"><img src={sp7} alt="" /></a>
                <a href="https://2cumbres.com.ar/search/?q=rockshox"target="_blank"><img src={sp12} alt="" /></a>
                <a href="https://www.clubsanjorge.com.ar/"target="_blank"><img src={sp9} className="casj" alt="" /></a>
                <div></div>
                <a href="https://premiumtri.com/"target="_blank"><img src={sp15} alt="" /></a>
                <a href="https://2cumbres.com.ar/search/?q=zipp"target="_blank"><img src={sp11} alt="" /></a>
                <a href="https://2cumbres.com.ar/search/?q=sram"target="_blank"><img src={sp6} alt="" /></a>
                <img src={sp10} alt="" />
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <a href="https://www.progravityhealth.com/"target="_blank"><img src={sp17} alt="" /></a>
                
            </div>
            <div className="sponsorsSecundarios">
                <a href="https://www.nutritionred.com.ar/"target="_blank"><img src={sp1} alt="" /></a>
                <a href="https://www.instagram.com/modofitentrenamientos/"target="_blank"><img src={sp16} className="fit" alt="" /></a>
                <a href="https://linktr.ee/centroymoa?fbclid=PAAaZJXYoAJKsTioI6-5V4qusHp_MndSWBdwQtDmvMQf69NeOuMPj93dppTN4"target="_blank"><img src={sp8} alt="" /></a>
                <a href="https://www.instagram.com/cabritoscycling/"target="_blank"><img src={sp20} alt="" /></a>
                <a href="https://qualitynutriciondeportiva.com/?fbclid=PAAabOYNGcFBFM9PWB53R4Ptk-2lMMMq_NYIvYR11l0TXCuME3j_e9gCFDbyA"target="_blank"><img src={sp13} alt="" /></a>
                <div></div>
                <a href="https://linktr.ee/Indusparquetarg?fbclid=PAAaa6pG3VjsbOjN8YKZT1e6D2HK7Kotcu_htA4o4xKjysQ7nDZ2IOarKAjuU"target="_blank"><img src={sp19} alt="" /></a>
                <a href="https://www.atom.bio/runningtrip/?fbclid=PAAaZhuYIi0Af-MkKfbI8lrXmWLVr1_t8nLKv6Kp0gtpZeVt-1SBwKTNzyzW8"target="_blank"><img src={sp18} alt="" /></a>
                <a href="https://footpoint.com.ar/?fbclid=PAAaYO_UK1Qx1BlCnluZkdmYTtNqb9b1A58BRs87Jp7zL-NGun3Mjqfm5kMy0"target="_blank"><img src={sp14} alt="" /></a>
                <div></div>
            </div>
            <div className="endHome">
                <img src={corteFoor} className="martinImgBike" alt="" />
            </div>
        </div>
    )
}

export default Home