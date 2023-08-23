import "./Taur.scss"
import imgTaur from "../../assets/trail.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import ImgViewTrail from "../ImgView/ImgViewTrail";
import imgJump from "../../assets/imgJump.jpg"
import { useTranslation } from "react-i18next"
import Menu from "../Header/Menu";

const Taur = () => {

    const { t } = useTranslation()

    return(
        <div className="animation">
        <Menu/>
        <img src={imgTaur} className="imgTaur" alt="" />
           
                <div className="flexCardTriTaur">
                    <h1>TRIAL RUNNING</h1>
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p> 
                </div>
                <div className="flexLogoCard">
                    <img src={logo} className="logo" alt="" />
                </div>
                
                
        <div>
            <Spon/>
        </div>
        <div className="trialFlex">
                    <h2 className="titleTrial">{t("Generales.resultados")}</h2>
                    <p className="hash">{t("Generales.hash")}</p>
                </div> 
                <img src={imgJump} className="imgJump" alt="" />
                <div className="ptrial">
                    <h3>2023</h3>
                    <p>Valholl by UTMB 21km Villa General Belgrano Córdoba Argentina... 3° puesto T 2h:56</p>
                    <p>Chivas trail 26km  Las leñas Mendoza Argentina.... 1° puesto T 4h:59</p>
                    <h3>2022</h3>
                    <p>Mountain do 21km Ushuaia Tierra del fuego (NIEVE) 8° puesto</p>
                    <h3>2021</h3>
                    <p>Cruce Columbia 100km  Villa la Angostura Argentina 51° Puesto T 11h 51:19</p>
                    <h3>2008</h3>
                    <p>Cross Campo Desafio Sport 78.... 16km.... 11° puesto T 1h:14:39</p>
                    <p>Carrera de calle 10km Adidas Rosario Santa fe..... 81° puesto</p>
                    <p>Carrera de calle 10km BsAs.... 41° puesto</p>
                    <h3>2007</h3>
                    <p>Carrera de calle 10km Reebok BsAs... 155° puesto T 00:47:41</p>
                    <p>Carrera Montaña 15km La Cumbre Córdoba... 11° puesto T 1h 21:00</p>
                    <p>Carrera 10km Villa Carlos Paz Córdoba 5° puesto T 1h:00:13</p>
                    <h3>2006</h3>
                    <p>Cross Campo 16km Club La Dolfina Rosario Santa fe.... 31°Puesto T 1h 08:39</p>
                    <p>Half Marathon 21km Rosario Santa fe.. 53°Puesto T 1h35:49</p>
                    <h3>2005</h3>
                    <p>Marathon 42km Internacional BsAs T 3h50:24</p>
                    <p>Half Marathon Internacional BsAs.. 145° puesto T 1h38:00</p>
                    <h3>2004</h3>
                    <p>Half Marathon Internacional BsAs 74° puesto T 1h29:27</p>
                    <p>Marathon Dia de la Bandera... Rosario.. Santa fe  51° puesto T 3h43:43</p>
                    <h3>2003</h3>
                    <p>Half Marathon Campeonato Iberoamericano Bs As T 1h24:18</p>
                </div>
       
        <ImgViewTrail/>
</div>
    )
}

export default Taur