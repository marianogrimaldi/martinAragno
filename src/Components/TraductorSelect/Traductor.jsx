
import React,{useState} from "react";
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
        setLanguage (lan)
    }
    
    return (
        
        <div className="flags">
            
            <img onClick={()=>{cambiar("es")}} className={i18n.language === "es" ? "flagSelected":""} src={España}  alt="" />
            <img onClick={()=>{cambiar("en")}} className={i18n.language === "en" ? "flagSelected":""} src={Inglaterra}  alt="" />
            <img onClick={()=>{cambiar("ger")}} className={i18n.language === "ger" ? "flagSelected":""} src={Alemania}  alt="" />
            <img onClick={()=>{cambiar("fr")}} className={i18n.language === "fr" ? "flagSelected":""} src={Francia}  alt="" />
            <img onClick={()=>{cambiar("port")}} className={i18n.language === "port" ? "flagSelected":""} src={Portugal}  alt="" />
            
        </div>
        
    )
}

export default Traductor