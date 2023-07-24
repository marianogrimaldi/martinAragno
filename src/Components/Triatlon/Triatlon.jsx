import "./Triatlon.scss"
import imgTri from "../../assets/tri.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import ImgViewTri from "../ImgView/ImgViewTri"
import imgTrifondo from "../../assets/9.jpg"
import imgTrifondo2 from "../../assets/imgTrifondo.jpg"
import imgTrifondo3 from "../../assets/triNadando.jpg"

const Triatlon = () => {

  

    return(
        <div className="animation">
                <img src={imgTri} className="imgTri" alt="" />
                    <div className="flexCardTri">
                        <h1>TRIATHLON</h1>
                        <h2>MARTÍN ARAGNO</h2>
                        <p >multisport racing</p>
                    </div>
                    <div className="flexLogoCard">
                        <img src={logo} className="logo" alt="" />
                    </div>
                <div>
                    <Spon/>
                </div>
                <div className="triFlex">
                    <h2 className="titleTri">RESULTADOS DESTACADOS </h2>
                    <p className="hash">#SÉTUMÁXIMO</p>
                </div> 
                <img src={imgTrifondo} className="logoFondo" alt="" />
                <img src={imgTrifondo2} className="logoFondo2" alt="" />
                <img src={imgTrifondo3} className="logoFondo3" alt="" />

                <div className="pTri">
                <h3>2017</h3>
                <p>98° IM Texas -Campeonato Norteamericano, Circuito Mundial WTC-</p>
                <p>7° Half IM Thougman Series - Rosario, Argnentina</p>
                <h3>2016</h3>
                <p>50° Xterra Wolrd Championship Maui - Hawaii</p>
                <p>6° HALF TERMAS SANTIAGO DEL ESTERO - Campeonato Argentino-</p>
                <p>7° Xterra San Juan - Arg -Circuito Mundial-</p>
                <h3>2015</h3>
                <p>17° Xterra Brasil -Circuito Mundial-</p>
                <p>5° Half Valparaiso 70.3 - Chile</p>
                <h3>2014</h3>
                <p>Finisher IM Mallorca -Circuito Mundial- España</p>
                <p>2° Iron Antofagasta 70.3 - Chile</p>
                <p>52° Ironman Texas - Usa -Circuito Mundial WTC-</p>
                <p>1° Half Ironman Tafi del Valle - Tucumán, Argentina</p>
                <p>13° X-Trail Columbia -Huerta Grande, Cordoba</p>
                <h3>2011</h3>
                <p>57° IM Cozumel Mexico -Circuito Mundial WTC-</p>
                <p>6° Duatlon "Alturas de Punilla"</p>
                <p>Finisher IM Brasil -Circuito Mundial WTC-</p>
                <p>29° Tour de la Patagonia 200 km de MTB</p>
                <h3>2010</h3>
                <p>Finisher IM Frankfurt -Campeonato Europeo WYC-</p>
                <p>4° Half IM Santiago del Estero - Argentina</p>
                <h3>2009</h3>
                <p>30° Campeonato Sudamericano Olimpico - La Paz, Argentina</p>
                <p>80° IM Western Australia -Circuito Mundial WTC-</p>
                <p>9° Half IM Santa Fe</p>
                <p>10° Half IM Rio de Janeiro - Brasil</p>
                <p>104° IM Brasil -Circuito Mundial WTC-</p>
                <p>34° Half IM Concordia -Campeonato Argentino-</p>
                <p>17° Half IM Colonia - Uruguay</p>
                <h3>2008</h3>
                <p>17° Half IM Punta del Este - Uruguay </p>
                <p>32° Duathlon Endurance "Hombre de Piedra"</p>
                <p>23° Duathlon "Lakerman"</p>
                <h3>2006</h3>
                <p>59° IM Sudamerica -Circuito Mundial WTC-</p>
                <p>9° Duathlon Olimpico -Campeonato Argentino-</p>
                <p>9° Triathlon Carhue -Olimpico s/drafting-</p>
                <h3>2005</h3>
                <p>Finisher IM Brasil -Circuito Mundial WTC-</p>
                <p>26° Half IM Villa Gesel - Argentina</p>
                <p>20° Half IM Chajari -Campeonato Argentino-</p>
                <p>2° Triathlon Conquistadores del Sur - Tucuman</p>
                <h3>2004</h3>
                <p>1° Triathlon Sorint -Villa Constitucion Argentina-</p>
                <p>21° Half IM Villa Gesell - Argentina</p>
                <p>10° Half IM Chajari -Campeonato Argentino-</p>
                <h3>2003</h3>
                <p>14° Triathlon Olimpico - Santa Fe Argentina</p>
                <p>16° Triathlon Olimpico - Baradero Argentina</p>
                <p>41° Half IM Mar del Plata - Argentina</p>
                <h3>2002 - 2001</h3>
                <p>4° Campeonato Entrerriano Srpint </p>
                <p>1° Duathlon Short Felicia -Campeonato Santafesino-</p>
                <p>1° Duathlon Short Progreso -Campeonato Santafesino-</p>
                </div>
                <ImgViewTri/>
        </div>
    )
}

export default Triatlon