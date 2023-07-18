import "./Calendario.scss"
import imgCal from "../../assets/calendario.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors"
import corriendo from "../../assets/corriendo.jpg"

const Calendario = () => {
    return(
        <div className="animation">
                <img src={imgCal} className="imgCal" alt="" />
                <div className="flexCardCal">
                    <h1>CALENDARIO</h1>
                  
                    <h2>MARTÍN ARAGNO</h2>
                    <p >multisport racing</p>
                </div>
                <div className="flexLogoCard">
                    <img src={logo} className="logoCal" alt="" />
                </div>
                <div>
                    <Spon/>
                </div>
                <div>
                    <div className="calFlex" >
                        <h2 className="titleCal">CALENDARIO 2023</h2>
                        <p className="hash">#SÉTUMÁXIMO</p>
                    </div>
                    <img src={corriendo} className="logoFondoCal" alt="" />    
                    <div className="pCal">
                    <h3>JULIO</h3>
                    <p>9/7 Trail running 12km Valle fertil San Juan</p>
                    <h3>AGOSTO</h3>
                    <p>27/08 21km Media de Bs As</p>
                    <h3>SEPTIEMBRE</h3>
                    <p>3/9 Trail Running King Paraguay</p>
                    <p>19/9 MTB XCM 120km La Falda Campeonato Argentino</p>
                    <p>23/9 Half Termas tentativo -invitado-</p>
                    <h3>OCTUBRE</h3>
                    <p>29/10 70.3 Bs As</p>
                    <h3>NOVIEMBRE</h3>
                    <p>4/11 Trail Running King Paraguay</p>
                   </div>
                </div>
        </div>
    )
}

    export default Calendario