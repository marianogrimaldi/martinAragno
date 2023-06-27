import "./Home.scss"
import imgHome from "../../assets/homePic.jpg"
import imgHistory from "../../assets/imgHistory.jpg"
import logo from "../../assets/logoRojo.png"
import imgSponsors from "../../assets/imgSponsors.jpg"
import corteFoor from "../../assets/corteFooter.jpg"
import sp1 from "../../assets/sponsors/1.png"
import sp2 from "../../assets/sponsors/naka.png"
import sp3 from "../../assets/sponsors/7.jpg"
import sp4 from "../../assets/sponsors/10.png"
import sp5 from "../../assets/sponsors/4.png"
import sp6 from "../../assets/sponsors/11.png"
import sp7 from "../../assets/sponsors/8.webp"
import sp8 from "../../assets/sponsors/9.png"
import sp9 from "../../assets/sponsors/7.png"
import sp10 from "../../assets/sponsors/5.jpg"
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

const Home = () => {
    return(
        <div className="animation">
            <div className="flexTitle">
                <h2 className="title">MARTÍN</h2>
                <img src={logo} className="logoPrincipal" alt="" /> 
                <h2 className="title"> ARAGNO</h2>
            </div>
            <h3 className="subTitle">multisport racing</h3>
            <div className="flexHome">
                <img src={imgHome} className="imgPrincipal" alt="" />
                <div className="datos">
                    <h1 className="frase">"La pasión es la gran diferencia..."</h1>
                    <h2 className="firma">Martín Aragno</h2>
                    <p>Nacimiento 12 - 06 - 1972 || San Jorge</p> 
                    <p>Residencia San jorge || Villa Giardino </p>
                    <p>Profesion Atleta Multisport</p>
                    <p>Asociacion Ezk Team</p>
                    <p>Entrenador Ezequiel Morales</p>
                    <p> Datos fisicos </p>
                    <p> Altura 1,77cm</p>
                    <p> Peso 78kg </p>
                    <p> Calzado 43 </p>
                    <p>Grasa corporal 12% </p>
                    <p> Pulsos menor 40 maximo 182 </p>
                </div>
            </div>
           
            <h1 className="titleHistory">ATLETA DE LA CUNA AL CIELO</h1>
            <img src={imgHistory} className="imgHistory" alt="" />
            <p className="textHistory">"Atleta de la cuna al cielo.
Nacido y criado en san Jorge pcia. de Santa Fé. Con 5 años ya comnezaba a despuntar y vivir la pasión por los deportes. Después del hogar y la escuela, estaba el club, donde se pasaban muchas horas realizando diferentes actividades, desde futbol, básquet, vóley, atletismo, natación, etc.
A medida que fueron pasando los años la orientación principal en lo deportivo fue hacia el fútbol, hasta los 19 años,  para luego desarrollar otro tipo de actividades, junto con los inicios en los estudios tercearios. 

En los siguientes años comencé con esta pasión por los deportes combinados y extremos, y que desde el año 2000 junto al comienxo de un nuevo milenio, forma parte de mi vida, participando de triatlones como actividad, principal (Iron man con mas de 20 años de trayectoria y recorrido mundial), combinando con carreras de montaña (trial running) mountabike series y montñismo, sumado a todo desafio y aventura que se presente. Sin dudas el deporte es parte de mi ADN sumando vida en cada paso y decisiones que uno va tomando, siempre con la disciplina, compromiso, persistencia, dedicación y pasión de un profesional. 
El ser profesional no implica siempre obtener un gran resultado o solo mirarlo desde los títulos, para mi ser un profesional implica todos los factores antes mensionados y por sobre todo soñar en grande, hacer el trabajo y nunca rendirse."


</p>
<h2 className="firma2">Martín Aragno</h2>
<p className="hashtag">#sétumáximo</p>
            <h2 className="tittleSponsor">SOPORTES DE MI PASION</h2>
            <img src={imgSponsors} className="imgSponsors" alt="" />
            <div className="sponsorsGrid">
                <div ></div>
                
                <img src={sp3} alt="" />
                <img src={sp4} className="scott" alt="" />
                <img src={sp7} className="lasp" alt="" />
                <img src={sp9} className="casj" alt="" />
                <div></div>
                <img src={sp5} alt="" />
                <img src={sp6} alt="" />
                <img src={sp15} alt="" />
                <img src={sp12} alt="" />
                <div></div>
                <div></div>
                <img src={sp11} alt="" />
                <img src={sp10} className="cera" alt="" />
                </div>
                <div className="sponsorsSecundarios">
                <img src={sp1} alt="" />
                <img src={sp8} alt="" />
                <img src={sp13} alt="" />
                <img src={sp14} alt="" />
                <img src={sp2} className="naka" alt="" />
                <img src={sp16} className="fit" alt="" />
                <img src={sp17} alt="" />
                <img src={sp18} alt="" />
                <img src={sp19} alt="" />
                <img src={sp20} alt="" />
                </div>
                <div className="endHome">
                <img src={corteFoor} alt="" />
                <div className="flexEndFotos">
                <img src={logo} className="logoFinal" alt="" />
                <p className="hashtag">#sétumáximo</p>
                </div>
                </div>
        </div>
    )
}

export default Home