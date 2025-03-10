import "./SponPage.scss"
import imgNat from "../../assets/natacion.jpg"
import sp1 from "../../assets/sponsors/1.png"
import sp17 from "../../assets/sponsors/pro.png"
import sp3 from "../../assets/sponsors/7.jpg"
import sp6 from "../../assets/sponsors/11.png"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp11 from "../../assets/sponsors/zipp.png"
import sp12 from "../../assets/sponsors/rock.png"
import sp7 from "../../assets/sponsors/2cumbres.png"
import sp13 from "../../assets/sponsors/quality.png"
import sp14 from "../../assets/sponsors/foot.png"
import sp15 from "../../assets/sponsors/deboerw.png"
import sp16 from "../../assets/sponsors/modofit.png"
import sp10 from "../../assets/sponsors/quarq.png"
import sp18 from "../../assets/sponsors/running.png"
import sp19 from "../../assets/sponsors/indusP.png"
import sp20 from "../../assets/sponsors/cabritos.png"
import sp21 from "../../assets/sponsors/Giro.png"
import sp22 from "../../assets/sponsors/mauna.png"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const SponPage = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu />
            <div className="bgc">
                <h1 className="sponsTittle">{t("Sponsors.titulo")}</h1>
                <div className="imgNat">
                    <div className="flexSponPage">

                        <a href="https://2cumbres.com.ar/search/?q=rockshox" target="_blank"><img src={sp12} alt="" /></a>
                        <a href="https://ezkteam.com/" target="_blank"><img src={sp3} alt="" /></a>
                        <a href="https://2cumbres.com.ar/search/?q=zipp" target="_blank"><img src={sp11} alt="" /></a>
                        <img src={sp10} alt="" />
                        <a href="https://www.progravityhealth.com/"target="_blank"><img src={sp17} alt="" /></a>
                    </div>
                    <img src={imgNat} className="imgMartin" alt="" />
                    <div className="flexSponPage">
                        <a href="https://2cumbres.com.ar/" target="_blank"><img src={sp7} alt="" /></a>
                        <img src={sp15} alt="" />
                        <a href="https://www.clubsanjorge.com.ar/" target="_blank"><img src={sp9} alt="" /></a>
                        <a href="https://2cumbres.com.ar/search/?q=sram" target="_blank"><img src={sp6} alt="" /></a>
                        <a href="https://2cumbres.com.ar/" target="_blank"><img src={sp21} alt="Logo Giro" /></a>
                        <img src={sp22} alt="Logo Giro" />
                    </div>
                </div>
                <div className="sponSecGrid">

                    <a href="https://www.nutritionred.com.ar/" target="_blank"><img src={sp1} alt="" /></a>
                    <a href="https://www.instagram.com/modofitentrenamientos/" target="_blank"><img src={sp16} className="fit" alt="" /></a>
                    <a href="https://linktr.ee/centroymoa?fbclid=PAAaZJXYoAJKsTioI6-5V4qusHp_MndSWBdwQtDmvMQf69NeOuMPj93dppTN4" target="_blank"><img src={sp8} alt="" /></a>
                    <a href="https://www.instagram.com/cabritoscycling/" target="_blank"><img src={sp20} alt="" /></a>
                    <a href="https://qualitynutriciondeportiva.com/?fbclid=PAAabOYNGcFBFM9PWB53R4Ptk-2lMMMq_NYIvYR11l0TXCuME3j_e9gCFDbyA" target="_blank"><img src={sp13} alt="" /></a>
                    <div></div>
                    <a href="https://linktr.ee/Indusparquetarg?fbclid=PAAaa6pG3VjsbOjN8YKZT1e6D2HK7Kotcu_htA4o4xKjysQ7nDZ2IOarKAjuU" target="_blank"><img src={sp19} alt="" /></a>
                    <a href="https://www.atom.bio/runningtrip/?fbclid=PAAaZhuYIi0Af-MkKfbI8lrXmWLVr1_t8nLKv6Kp0gtpZeVt-1SBwKTNzyzW8" target="_blank"><img src={sp18} alt="" /></a>
                    <a href="https://footpoint.com.ar/?fbclid=PAAaYO_UK1Qx1BlCnluZkdmYTtNqb9b1A58BRs87Jp7zL-NGun3Mjqfm5kMy0" target="_blank"><img src={sp14} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default SponPage