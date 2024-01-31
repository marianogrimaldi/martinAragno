import "./Otros.scss"
import flagArg from "../../assets/flagArg.png"
import logo from "../../assets/logo.png"
import Menu from "../Header/Menu"

const Otros = () => {
    return (
        <div className="animation">
            <Menu />
            <div className="bgcO">

                <h1 className="titleOtros">OTROS RESULTADOS</h1>
                <div className="DatosO">
                    <img src={logo} alt="" />
                    <h2> MARTIN ARAGNO</h2>
                    <p>multisport racing</p>
                </div>

                <div  className="flexBtnPrincipal"id="tri">
                    <a href="#tri">TRIATHLON</a>
                    <a href="#mount">MOUNTAIN BIKE</a>
                    <a href="#trail">TRAIL & RUNNING</a>
                </div >

                <div  >
                    <div className="subTitles">
                        <h2 >TRIATHLON</h2>
                        <h3>2009</h3>
                        <div className="flexMedal">
                            <p>30° Campeonato Sudamericano Olimpico (La Paz - Entre Ríos, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>34° Half IM Concordia - Campeonato Argentino (Entre Ríos, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2008</h3>
                        <div className="flexMedal">
                            <p>32° Duathlon Endurance - Hombre de Piedra (Tandil - Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>23° Duathlon Endurance - Lakeman (Chascomus - Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2005</h3>
                        <div className="flexMedal">
                            <p>26° Half IM Villa Gesel (Bs As,Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>20° Half IM Chajari - Campeonato Argentino (Entre Ríos, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2004</h3>
                        <div className="flexMedal">
                            <p>21° Half IM Villa Gesell (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2003</h3>
                        <div className="flexMedal">
                            <p id="mount">41° Half IM Mar del Plata (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="subTitles">
                        <h2>MOUNTAIN BIKE</h2>
                        <h3>2022</h3>
                        <div className="flexMedal">
                            <p>Finisher Vuelta Altas Cumbres 120km (Mina Clavero - Córdoba, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2020</h3>
                        <div className="flexMedal">
                            <p>Finisher Vuelta Altas Cumbres 120km (Mina Clavero - Córdoba, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2010</h3>
                        <div className="flexMedal">
                            <p>Finisher Desafio Valle del Río Pinto 82km (La Cumbre - Córdoba, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>

                        <h3>2008</h3>
                        <div className="flexMedal">
                            <p>Finisher Desafio Valle del Río Pinto 75km (La Cumbre - Córdoba, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2007</h3>
                        <div className="flexMedal">
                            <p id="trail">Finisher Desafio al Valle del Río Pinto 75km (La Cumbre - Córdoba, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="subTitles">
                        <h2 >TRAIL & RUNNING</h2>
                        <h3>2008</h3>
                        <div className="flexMedal">
                            <p>81° Carrera de calle 10km Adidas (Rosario - Santa Fe, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>41° Carrera de calle 10km (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2007</h3>
                        <div className="flexMedal">
                            <p>155° Carrera de calle 10km Reebok (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2006</h3>
                        <div className="flexMedal">
                            <p>31° Cross Campo 16km Club La Dolfina (Rosario - Santa Fe, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>53° Half Marathon 21km (Rosario - Santa Fe, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>

                        <h3>2005</h3>
                        <div className="flexMedal">
                            <p>Finisher Marathon 42km Internacional (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <div className="flexMedal">
                            <p>145° Half Marathon 21km Internacional (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2004</h3>
                        <div className="flexMedal">
                            <p>74° Half Marathon 21 km Internacional (Bs As, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <p>T 1h29:27</p>
                        <div className="flexMedal">
                            <p>51° Marathon 42km Dia de la Bandera (Rosario - Santa Fe, Argentina)</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <h3>2003</h3>
                        <div className="flexMedal">
                            <p>Finisher Half Marathon 21km Campeonato Iberoamericano (Bs As, Argentina) T 1h24:18</p>
                            <div className="flexMedalFlag">
                                <img src={flagArg} className="flafWidth" alt="" />
                            </div>
                        </div>
                        <p className="pb">P. B. T 1h24':18"</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Otros