import "./SponPage.scss"
import imgNat from "../../assets/natacion.jpg"
import sp1 from "../../assets/sponsors/1.png"
import sp2 from "../../assets/sponsors/naka.png"
import sp3 from "../../assets/sponsors/7.jpg"
import sp4 from "../../assets/sponsors/10.png"
import sp5 from "../../assets/sponsors/4.png"
import sp6 from "../../assets/sponsors/11.png"
import sp7 from "../../assets/sponsors/8.webp"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp10 from "../../assets/sponsors/5.jfif"
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

const SponPage = () => {

    const { t } = useTranslation()

    return (
        <div className="animation">
            <Menu/>
            <h1 className="sponsTittle">{t("Sponsors.titulo")}</h1>
            <div className="imgNat">
                <div className="flexSponPage">
                    <img src={sp1} alt="" />
                    <img src={sp2} alt="" />
                    <img src={sp3} alt="" />
                    <img src={sp4} alt="" />
                    <img src={sp5} alt="" />
                </div>
                <img src={imgNat} className="imgMartin" alt="" />
                <div className="flexSponPage">
                    <img src={sp6} alt="" />
                    <img src={sp7} alt="" />
                    <img src={sp8} alt="" />
                    <img src={sp9} alt="" />
                    <img src={sp10} alt="" />
                </div>
            </div>
            <div className="sponSecGrid">
                <img src={sp11} alt="" />
                <img src={sp12} alt="" />
                <img src={sp13} alt="" />
                <img src={sp14} alt="" />
                <img src={sp15} alt="" />
                <img src={sp18} alt="" />
                <img src={sp17} alt="" />
                <img src={sp16} alt="" />
                <img src={sp19} alt="" />
                <img src={sp20} alt="" />
            </div>
        </div>
    )
}

export default SponPage