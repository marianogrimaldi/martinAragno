import "./Meraki.scss"
import meraki from "../../assets/meraki.jpg"

import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu"

const Meraki = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
            <Menu/>
            <img src={meraki} className="merakiImg" alt="" />
            <h1 className="merakiTitle">MERAKI</h1>
            <h2 className="subt">{t("Meraki.pronto")}</h2>
           
        </div>
        
    )
}

export default Meraki