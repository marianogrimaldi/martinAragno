import "./Mountain.scss"
import imgMont from "../../assets/mountain.jpg"
import logo from "../../assets/logoRojo.png"
import Spon from "../Sponsors/Sponsors";
import ImgViewMount from "../ImgView/ImgViewMount";
import imgfondo from "../../assets/imagenFondo.jpeg"


const Mountain = () => {



    return(
        <div className="animation">
        <img src={imgMont} className="imgMont" alt="" />
        <div className="flexCardMount">
            <h1 >MOUNTAIN</h1>
            <h2 >MARTÍN ARAGNO</h2>
            <p >multisport racing</p>
        </div>
        <div className="flexLogoCard">
            <img src={logo} className="logo" alt="" />
        </div>
        <div>
            <Spon/>
        </div>
        
        <div className="mountFlex">
            <h2 className="titleMount">CUMBRES DE MI VIDA </h2>
            <p className="hash">#SÉTUMÁXIMO</p>
        </div> 
        <img src={imgfondo} className="logoFondo" alt="" />
        <div className="pMount">
            <h3>ESPAÑA</h3>
            <a href="https://es.wikipedia.org/wiki/Monte_Perdido" target="blank"><p>Cerro Monte Perdido altitud 3355 msnm - Pirineos Aragonés</p></a>
            <a href="https://es.wikipedia.org/wiki/Puig_Campana"target="blank"><p>Cerro Puig Campana altitud 1406 msnm - Alicante</p></a>
            <h3>CHILE</h3>
            <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_L%C3%A1scar"target="blank"><p>Volcan Lascar altitud 5592 msnm (activo) - Atacama</p></a>
            <h3>CORODBA - ARGENINA</h3>
            <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-el-mojon/"target="blank"><p>Cerro El Mojon x 2 altitud 1290 msnm </p></a>
            <a href="https://www.turismolafalda.gob.ar/circuitoTuristicoDetalle/CerroLaBanderita"target="blank"><p>Cerro La Banderita x 10 altitud 1450 msnm </p></a>
            <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-pan-de-azucar-un-clasico-de-las-sierras-chicas/"target="blank"><p>Cerro Pan de Azucar x 2 altitud 1260 msnm </p></a>
            <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-uritorco/"target="blank"><p>Cerro Uritorco x 2 altitud 1979 msnm </p></a>
            <a href="https://www.cordobaturismo.gov.ar/experiencia/macizo-los-gigantes/"target="blank"><p>Cerro Los Gigantes altitud 2370 msnm</p></a>
            <a href="https://www.cordobaturismo.gov.ar/experiencia/cerro-champaqui/"target="blank"><p>Cerro Champaqui altitud 2790 msnm</p></a>
            <h3>CATAMARCA - ARGENTINA</h3>
            <a href="https://www.wikiexplora.com/Cerro_Pastos_Largos"target="blank"><p>Cerro Pastos Largos altitud 4120 msnm </p></a>
            <a href="https://www.wikiexplora.com/Cerro_Falso_Morocho"target="blank"><p>Cerro Falso Morocho altitud 4478 msnm</p></a>
            <h3>NEUQUEN - ARGENTINA</h3>
            <a href="https://es.wikipedia.org/wiki/Volc%C3%A1n_Lan%C3%ADn"target="blank"><p>Volcan Lanín altitud 3776 msnm </p></a>
            <h3>SALTA - ARGENTINA</h3>
            <a href="https://www.minube.com.ar/rincon/cerro-negro--a3674338"target="blank"><p>Cerro Negro altitud 5012 msnm </p></a>
        </div>
        <ImgViewMount/>
</div>
    )
}

export default Mountain