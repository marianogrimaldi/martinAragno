import "./SponPage.scss"
import imgNat from "../../assets/natacion.jpg"
import sp1 from "../../assets/sponsors/1.png"

import sp3 from "../../assets/sponsors/7.jpg"
import sp6 from "../../assets/sponsors/11.png"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp11 from "../../assets/sponsors/zipp.png"
import sp12 from "../../assets/sponsors/rock.png"
import sp7 from "../../assets/sponsors/2cumbres.png"
import sp13 from "../../assets/sponsors/quality.png"
import sp14 from "../../assets/sponsors/foot.png"
import sp15 from "../../assets/sponsors/xterra.png"
import sp16 from "../../assets/sponsors/modofit.png"
import sp10 from "../../assets/sponsors/quarq.png"
import sp18 from "../../assets/sponsors/running.png"
import sp19 from "../../assets/sponsors/indusP.png"
import sp20 from "../../assets/sponsors/cabritos.png"
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

                        <img src={sp12} alt="" />
                        <img src={sp3} alt="" />
                        <img src={sp11} alt="" />
                        <img src={sp10} alt="" />
                    </div>
                    <img src={imgNat} className="imgMartin" alt="" />
                    <div className="flexSponPage">
                        <img src={sp7} alt="" />
                        <img src={sp15} alt="" />
                        <img src={sp9} alt="" />
                       <img src={sp6} alt="" /> 



                    </div>
                </div>
                <div className="sponSecGrid">

                    <img src={sp1} alt="" />
                    <img src={sp13} alt="" />
                    <img src={sp14} alt="" />
                    <img src={sp8} alt="" />
                    <img src={sp18} alt="" />
                    <div></div>
                    <img src={sp19} alt="" />
                    <img src={sp16} alt="" />
                    <img src={sp20} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SponPage