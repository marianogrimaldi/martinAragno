
import React,{useEffect} from "react";
import { useTranslation } from 'react-i18next';
import España from "../../assets/esp.png"
import Inglaterra from "../../assets/ing.png"
import Portugal from "../../assets/port.png"
import Alemania from "../../assets/ale.png"
import Francia from "../../assets/fra.png"
import "./Traductor.scss"


const Traductor = () =>{
    const { t, i18n } = useTranslation();
    const cambiar = (lan)=>{
        localStorage.setItem("lang",lan);
        i18n.changeLanguage(lan);
    }
    return (
        
        <div className="flags">
            

            <img onClick={()=>{cambiar("es")}} src={España}  alt="" />
            <img onClick={()=>{cambiar("en")}} src={Inglaterra}  alt="" />
            <img onClick={()=>{cambiar("ger")}} src={Alemania}  alt="" />
            <img onClick={()=>{cambiar("fr")}} src={Francia}  alt="" />
            <img onClick={()=>{cambiar("port")}} src={Portugal}  alt="" />
            
        </div>
        
    )
}

export default Traductor