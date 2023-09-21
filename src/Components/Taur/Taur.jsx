import "./Taur.scss"
import imgTaur from "../../assets/trail.jpg"
import logo from "../../assets/logoRojo.png"

import ImgViewTrail from "../ImgView/ImgViewTrail";
import imgJump from "../../assets/imgJump.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu";
import medallaOro from "../../assets/medalla1.png"
import medallaBronce from "../../assets/medalla3.png"

const Taur = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
        <Menu/>
        <img src={imgTaur} className="imgTaur" alt="" />
           
                <div className="flexCardTriTaur">
                    <h1>TRIAL & RUNNING</h1>
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p> 
                </div>
                <div className="flexLogoCard">
                    <img src={logo} className="logo" alt="" />
                </div>
                
        <div className="trialFlex">
                    <h2 className="titleTrial">{t("Generales.resultados")}</h2>
                    <p className="hash">{t("Generales.hash")}</p>
                </div> 
                <img src={imgJump} className="imgJump" alt="" />
                <div className="ptrial">
                    <h3>2023</h3>
                    <div className="flexMedal">
                        <img src={medallaBronce} className="medalla" alt="" />  
                        <p>3° Trail Running Trip 12km (Valle Fertil - San Juan, Argentina)</p>   
                    </div>
                   
                    <div className="flexMedal">
                        <img src={medallaBronce} className="medalla" alt="" />
                        <p>3° Valholl by UTMB 21km (Villa General Belgrano - Córdoba, Argentina)</p>  
                    </div>
                    <p className="pb">P. B. T 2hs56'</p>
                    <div className="flexMedal">
                        <img src={medallaOro} className="medalla" alt="" />
                        <p>1° Chivas Trail 26km  (Las Leñas - Mendoza, Argentina)</p> 
                    </div>
                    <p  className="pb">P. B. T 4hs59'</p>
                    <h3>2022</h3>
                    <p>8° Mountain do 21km NIEVE (Ushuaia - Tierra del Fuego, Argentina)</p>
                    <h3>2021</h3>
                    <p>51° Cruce Columbia 100km (3 Etapas) (Villa la Angostura - Neuquen, Argentina) </p>
                    <p className="pb">P. B. T 11hs 51':19"</p>
                    <h3>2014</h3>
                    <p>13° X-Trail Columbia 25km (Huerta Grande - Cordoba, Argentina)</p>
                    <h3>2008</h3>
                    <p>11° Cross Campo Desafio Sport 78 16km (Rosario - Santa Fe, Argentina) </p>
                    <p>81° Carrera de calle 10km Adidas (Rosario - Santa Fe, Argentina)</p>
                    <p>41° Carrera de calle 10km (Bs As, Argentina)</p>
                    <h3>2007</h3>
                    <p>155° Carrera de calle 10km Reebok (Bs As, Argentina)</p>
                    <p>11° Carrera Montaña 15km (La Cumbre - Córdoba, Argentina)</p>
                    <p>5° Carrera Cross Traill 10km (Villa Carlos Paz - Córdoba, Argentina)</p>
                    <h3>2006</h3>
                    <p>31° Cross Campo 16km Club La Dolfina (Rosario - Santa Fe, Argentina)</p>
                    <p>53° Half Marathon 21km (Rosario - Santa Fe, Argentina)</p>
                    <h3>2005</h3>
                    <p>Finisher Marathon 42km Internacional (Bs As, Argentina)</p>
                    <p>145° Half Marathon 21km Internacional (Bs As, Argentina)</p>
                    <h3>2004</h3>
                    <p>74° Half Marathon 21 km Internacional (Bs As, Argentina)</p>
                    <p>T 1h29:27</p>
                    <p>51° Marathon 42km Dia de la Bandera (Rosario - Santa Fe, Argentina)</p>
                    <h3>2003</h3>
                    <p>Finisher Half Marathon 21km Campeonato Iberoamericano (Bs As, Argentina) T 1h24:18</p>
                    <p className="pb">P. B. T 1h24':18"</p>
                </div>
       
        <ImgViewTrail/>
</div>
    )
}

export default Taur